class Cost {

    constructor(Category, Quantity, Description, Sum, Date) {
        this.Category = capitalizeFirstLetter(Category);
        this.Quantity = Quantity || '1';
        this.Description = Description || "No description";
        this.Sum = Sum || '0';
        this.Date = Date || '2022-01-01';
    }
}

const capitalizeFirstLetter = (string) => {
    if (string === undefined)
        return "Other";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default Cost;