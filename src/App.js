import React, { useState } from "react";
import { getData } from "./localStorage";
import ChooseDate from "./chooseDate";
import Report from "./report";
import CostsForm from "./costsForm";
import Field from "./field";
import './app.css'


function App() {
    const [costs, setCosts] = useState([]); // state that holds the costs values
    const [visible, setVisible] = useState(true); // state that controls the visibility of the costs form or the report
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // state that holds the selected month
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // state that holds the selected year
    const [displayedCosts, setDisplayedCosts] = useState([]); // state that holds the costs that will be displayed in the report

    // array of fields that will be displayed in the costs form and the report
    const fields = [
        new Field("Category", "text", "Category", true),
        new Field("Quantity", "number", "Quantity"),
        new Field("Description", "text", "Description"),
        new Field("Sum", "number", "Sum", true),
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

    // function that closes the report and displays the costs form
    const closeReport = () => {
        setVisible(true);
    };

    // render the costs form or the report depending on the value of the visible state
    return (
        <div className="mainDiv">
            {
                visible ?
                    <CostsForm costs={costs} setCosts={setCosts} fields={fields} visible={visible} setVisible={setVisible} />
                    :
                    <Report displayedCosts={displayedCosts} fields={fields} visible={visible} setVisible={setVisible} />
            }
            <ChooseDate handleMonthChange={handleMonthChange} handleReportGeneration={handleReportGeneration} closeReport={closeReport}></ChooseDate>
        </div>
    );
}

export default App;

