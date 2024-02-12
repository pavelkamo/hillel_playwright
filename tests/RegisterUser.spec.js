import { test, expect } from "@playwright/test";

test.describe("Hillel auto first test", () => {
    test("Registration", async ({ page }) => {
        const USER_NAME = 'BOB';
        const USER_LAST_NAME = 'BOBENKO';
        const USER_PASSWORD = 'Test@1234';

        //Page locators
        const emailInput = page.locator("#signupEmail");
        const passwordInput = page.locator('input[name="password"]');
        const repeatPasswordInput = page.locator('input[name="repeatPassword"]');
        const waitIconUserProfile = page.locator("#userNavDropdown");
        const signUpName = page.locator("#signupName");
        const signupLastName = page.locator("#signupLastName");
        const signUpButton = page.locator("button.btn-primary");
        const registerButton = page.locator("button", { hasText: "Register" });

        //Generate random user
        const randomUser = Math.floor(Math.random() * 1000);
        const email = `random_user${randomUser}@test.com`;

        //Fill up application
        await page.goto("/");
        await signUpButton.click();
        await signUpName.fill(USER_NAME);
        await expect(signUpName).toHaveValue(USER_NAME);
        await signupLastName.fill(USER_LAST_NAME);
        await emailInput.fill(email);
        await expect(emailInput).toHaveValue(email);
        await passwordInput.fill(USER_PASSWORD);
        await expect(passwordInput).toHaveValue(USER_PASSWORD);
        await repeatPasswordInput.fill(USER_PASSWORD);
        await expect(repeatPasswordInput).toHaveValue(USER_PASSWORD);
        await registerButton.click();
        await expect(waitIconUserProfile).toBeVisible();
    });
});