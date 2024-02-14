import { test, expect } from "@playwright/test";
import { ProfilePage } from "./POM/ProfilePage";

test.describe("Upload images @L25", () => {
  test("Upload user profile image", async ({ page }) => {
    const profilePage = new ProfilePage(page);
    await page.goto("/panel/profile");
    await profilePage.editProfile.click();
    await profilePage.photoLoader;
    await profilePage.saveButton.click();
    await expect(profilePage.updatePhotoPopup).toBeVisible();
  });
});