import React, { useState } from "react";
import Costs from "./Costs";
import Report from "./Report";
import { saveData, getData } from "./localStorage";
import './App.css'
import Field from "./Field";

function App() {
    const [costs, setCosts] = useState([]);
    const fields = [
        new Field("Category", "text", "Category"),
        new Field("Quantity", "number", "Quantity"),
        new Field("Description", "text", "Description"),
        new Field("Sum", "number", "Sum"),
        new Field("Date", "date", "Date"),
    ];

    return (
        <div className = "mainDiv">
            <Costs costs={costs} setCosts={setCosts} fields={fields} />
            <Report costs={[]} />
        </div>
    );
}

export default App;

