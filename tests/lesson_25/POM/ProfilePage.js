export class ProfilePage {
    constructor(page) {
        this.page = page;
        //Buttons
        this.saveButton = page.locator("button", {hasText: "Save"});

        //Other elements
        this.editProfile = page.locator("button", {hasText: "Edit profile"});
        this.photoLoader = page.setInputFiles("input#editProfilePhoto", "tests/lesson_25/fixtures/new_logo.jpg");
        this.updatePhotoPopup = page.locator(".alert-success");
    }
}