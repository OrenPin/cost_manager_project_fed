import React, { useEffect, useState } from 'react';
import { getData } from './localStorage';

const Report = (props) => {
    // states for the month and year selection
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [displayedCosts, setDisplayedCosts] = useState([]);

    // functions that handle the change of the month selection
    const handleMonthChange = (e) => {
        setSelectedMonth(Number(e.target.value));
    };

    // function that handles the change of the year selection
    const handleYearChange = (e) => {
        setSelectedYear(Number(e.target.value));
    };

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
                <label>Month:</label>
                <select value={selectedMonth} onChange={handleMonthChange}>
                    <option value={0}>January</option>
                    <option value={1}>February</option>
                    <option value={2}>March</option>
                    <option value={3}>April</option>
                    <option value={4}>May</option>
                    <option value={5}>June</option>
                    <option value={6}>July</option>
                    <option value={7}>August</option>
                    <option value={8}>September</option>
                    <option value={9}>October</option>
                    <option value={10}>November</option>
                    <option value={11}>December</option>
                </select>
                <label>Year:</label>
                <input type="number" value={selectedYear} onChange={handleYearChange} />
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



