import React from 'react';
import {getData} from './localStorage';

const Report = () => {
    const data = getData();
    const [costs, setCosts] = React.useState(Array.isArray(data) ? data : []);
    const [month, setMonth] = React.useState("");
    const [year, setYear] = React.useState("");
    const [filteredCosts, setFilteredCosts] = React.useState([]);

    const handleChange = e => {
        if (e.target.name === "month") {
            setMonth(e.target.value);
        } else {
            setYear(e.target.value);
        }
    };

    const filterCosts = () => {
        setFilteredCosts(costs.filter(
            cost =>
                new Date(cost.date).getMonth() === Number(month) - 1 &&
                new Date(cost.date).getFullYear() === Number(year)
        ))
    }

    return (
        <div>
            <form>
                <label>
                    Month:
                    <select name="month" onChange={handleChange}>
                        <option value="">Select a month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </label>
                <br />
                <label>
                    Year:
                    <select name="year" onChange={handleChange}>
                        <option value="">Select a year</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        //..
                    </select>
                </label>
                <button onClick={filterCosts}>Show filtered costs</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Sum</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCosts.map((cost, index) => (
                        <tr key={index}>
                            <td>{cost.sum}</td>
                            <td>{cost.category}</td>
                            <td>{cost.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Report;
