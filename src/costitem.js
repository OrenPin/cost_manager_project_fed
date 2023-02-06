// Eylam Kadden 206516957
// Oren Pinhasov 318552734
// Class for cost item
// Set default values for empty fields
class CostItem {
    constructor(Category, Quantity, Description, Sum, Date) 
    {
        this.Category = capitalizeFirstLetter(Category);
        this.Quantity = Quantity || 1;
        this.Description = Description || "No description";
        this.Sum = Sum;
        this.Date = Date || setDefaultDate();
    }

    // Copy constructor for onchange event in the form
    copyConstructor(obj) {
        Object.assign(this, obj);
    }

}

// Function to set default date (today's date) when no date is provided
const setDefaultDate = () => {
    return new Date().toISOString().slice(0, 10);
}

// Function to capitalize first letter of a string so the report won't have duplicates
const capitalizeFirstLetter = (word) => {
    if (word === undefined)
        return "Other";
    const fixedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return fixedWord;
}

export { CostItem, capitalizeFirstLetter };

