import {test, expect} from "@playwright/test";
import {GaragePage} from "./POM/GaragePage";

test.describe("Garage add car tests @L25", () => {
    test("Add car", async ({page}) => {
        const garagePage = new GaragePage(page);
        await page.goto("/");

        await garagePage.addCarButton.click();
        await garagePage.brandDropdown.selectOption("Audi");
        await garagePage.modelDropdown.selectOption("A8");
        await garagePage.mileageInput.fill("1000");
        await garagePage.addButton.click();
        await garagePage.addFuelExpenseButton.first().click();
        await garagePage.numberOfLiters.fill("50");
        await garagePage.totalCost.fill("55000");
        await garagePage.mileageInput.fill("2000");
        await garagePage.addButton.click();
        await expect(garagePage.tableCellCurrency).toHaveText("55000.00 USD");
    });
});