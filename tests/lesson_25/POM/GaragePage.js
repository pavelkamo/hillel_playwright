export class GaragePage {
    constructor(page) {
        this.page = page;

        //Buttons
        this.addCarButton = page.getByRole("button", {name: "Add car"});
        this.addButton = page.getByRole("button", {name: "Add"});
        this.addFuelExpenseButton = page.getByRole("button", {
            name: "Add fuel expense",
        });

        //Dropdowns
        this.brandDropdown = page.getByLabel("Brand");
        this.modelDropdown = page.getByLabel("Model");
        //Inputs
        this.mileageInput = page.getByLabel("Mileage");

        //Other elements
        this.numberOfLiters = page.getByLabel("Number of liters");
        this.totalCost = page.getByLabel("Total cost");
        this.tableCellCurrency = page.getByRole("cell", {name: "USD"});
    }
}