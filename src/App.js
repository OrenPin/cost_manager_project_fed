import React, { useState, useEffect } from "react";
import Costs from "./Costs";
import Report from "./Report";
import { saveData, getData } from "./localStorage";
import './App.css'


function App() {
    const [costs, setCosts] = useState([]);

    useEffect(() => {
        const data = getData("costs");
        setCosts(data);
    }, []);

    useEffect(() => {
        saveData("costs", costs);
    }, [costs]);

    return (
        <div>
            <Costs costs={costs} setCosts={setCosts} />
            <Report costs={getData()} />
        </div>
    );
}

export default App;

