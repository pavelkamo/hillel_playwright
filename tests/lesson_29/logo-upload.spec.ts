import { test, expect } from "@playwright/test";
import { ProfilePage } from "./profile.page";

test.describe("Profile page test @L29", () => {
  test.only("Update profile page", async ({ page }) => {
    const profilePage = new ProfilePage(page);
    await profilePage.open();
    await profilePage.editProfileButton.click();
    await profilePage.setInputFiles("tests/lesson_29/fixtures/new_logo.jpg");
    await profilePage.saveButton.click();
    await expect(profilePage.updatePhotoPopup).toBeVisible();
  });
});