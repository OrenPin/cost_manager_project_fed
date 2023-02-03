import React, { useState, useEffect } from "react";
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
    ]

    useEffect(() => {
        const data = getData("costs");
        setCosts(data);
    }, []);

    useEffect(() => {
        saveData("costs", costs);
    }, [costs]);

    return (
        <div className = "mainDiv">
            <Costs costs={costs} setCosts={setCosts} fields={fields} />
            <Report costs={getData()} />
        </div>
    );
}

export default App;

