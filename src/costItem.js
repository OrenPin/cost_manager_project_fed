class CostItem {

    constructor(Category, Quantity, Description, Sum, Date) {
        this.Category = capitalizeFirstLetter(Category);
        this.Quantity = Quantity || '1';
        this.Description = Description || "No description";
        this.Sum = Sum || '0';
        this.Date = Date || setDefaultDate();
    }
}

const setDefaultDate = () => {
    return new Date().toISOString().slice(0, 10);
}

const capitalizeFirstLetter = (string) => {
    if (string === undefined)
        return "Other";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default CostItem;