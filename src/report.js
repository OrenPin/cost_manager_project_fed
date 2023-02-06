// Eylam Kadden 206516957
// Oren Pinhasov 318552734
import ReportPieChart from './chart';
import { useEffect, useState } from 'react';
import './report.css';

// component that displays the report
const Report = (props) => {

    // function that formats the data for the pie chart
    const formatDataForGraph = (displayedCosts) => {
        let categoryCount = {};
        displayedCosts?.forEach((cost) => {
            if (cost.Category in categoryCount)
                categoryCount[cost.Category] += Number(cost.Sum);
            else
                categoryCount[cost.Category] = Number(cost.Sum);
        });
        let formattedData = []
        Object.keys(categoryCount)?.forEach((category) => {
            if (category === undefined || category === null || category === '')
                category = 'Other';
            formattedData.push({ Category: category, Sum: categoryCount[category] });
        });
        return formattedData;
    }

    const [data, setData] = useState(); // data for the pie chart (category and sum)

    // update the data for the pie chart when the displayed costs change
    useEffect(() => { setData(formatDataForGraph(props.displayedCosts)); }, [props.displayedCosts]);

    return (
        <div className="reportDiv">
            <div className='graphAndTableContainer'>
                <table className="Table" >
                    <thead >
                        <tr className='tableHeader'>
                            {props.fields.map((field, index) => { return <th key={index}>{field.label}</th> })}
                        </tr>
                    </thead>
                    <tbody>
                        {props.displayedCosts?.map((cost, index) => {
                            return (
                                <tr className='tableRow' key={index}>
                                    <td>{cost.Category}</td>
                                    <td>{cost.Quantity}</td>
                                    <td>{cost.Description}</td>
                                    <td>{cost.Sum}</td>
                                    <td>{cost.Date}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className='graphDiv'>
                    <ReportPieChart data={data} />
                </div>
            </div>
        </div>
    );
};

export default Report;



