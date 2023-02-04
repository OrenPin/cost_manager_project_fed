import React, { useEffect, useState } from "react";
import Costs from "./Costs";
import Report from "./Report";
import ChooseDate from "./ChooseDate.js";
import { saveData, getData } from "./localStorage";
import './App.css'
import Field from "./Field";


function App() {
    const [costs, setCosts] = useState([]);
    const [visible, setVisible] = useState(true);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [displayedCosts, setDisplayedCosts] = useState([]);

    const fields = [
        new Field("Category", "text", "Category"),
        new Field("Quantity", "number", "Quantity"),
        new Field("Description", "text", "Description"),
        new Field("Sum", "number", "Sum"),
        new Field("Date", "date", "Date"),
    ];

    // functions that handle the change of the month selection
    const handleMonthChange = (e) => {
        const date = new Date(e.target.value);
        setSelectedYear(date.getFullYear())
        setSelectedMonth(date.getMonth());
    };

    // function that handles the change of the year selection

    const handleReportGeneration = async () => {
        setVisible(false);
        let costs = await getData('costs');
        let filteredCosts = costs.filter(cost => {
            let date = new Date(cost.Date);
            return date.getMonth() === selectedMonth && date.getFullYear() === selectedYear;
        });
        setDisplayedCosts(filteredCosts);
    };

    const closeReport = () => {
        setVisible(true);
    };

    useEffect(() => { }, [visible]);


    return (
        <div className="mainDiv">
            {
                visible ?
                    <Costs costs={costs} setCosts={setCosts} fields={fields} visible={visible} setVisible={setVisible} />
                    :
                    <Report displayedCosts={displayedCosts} fields={fields} visible={visible} setVisible={setVisible} />
            }
            <ChooseDate handleMonthChange={handleMonthChange} handleReportGeneration={handleReportGeneration} closeReport={closeReport}></ChooseDate>
        </div>
    );
}

export default App;

