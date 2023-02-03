import React, { useEffect, useState } from 'react';
import { getData } from './localStorage';

const Report = (props) => {
    // states for the month and year selection
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [displayedCosts, setDisplayedCosts] = useState([]);

    // functions that handle the change of the month selection
    const handleMonthChange = (e) => {
        const date = new Date(e.target.value);
        setSelectedYear(date.getFullYear())
        setSelectedMonth(date.getMonth());
    };

    // function that handles the change of the year selection

      const handleReportGeneration = async () => {
        let costs = await getData('costs');
        let filteredCosts = costs.filter(cost => {
            let date = new Date(cost.Date);
            return date.getMonth() === selectedMonth && date.getFullYear() === selectedYear;
        });
        setDisplayedCosts(filteredCosts);
    };

    return (
        <div>
            <div>
                <span>
                    <label>Month | Year:</label>
                <input type="month" onChange={handleMonthChange} />
                </span>
            </div>
            <button onClick={handleReportGeneration}>Generate Report</button>
            <table>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Sum</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedCosts?.map((cost, index) => {
                        return (
                            <tr key={index}>
                                <td>{cost.Date}</td>
                                <td>{cost.Category}</td>
                                <td>{cost.Quantity}</td>
                                <td>{cost.Description}</td>
                                <td>{cost.Sum}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Report;



