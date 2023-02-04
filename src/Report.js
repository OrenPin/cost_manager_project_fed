import ReportPieChart from './Chart';
import { useEffect, useState } from 'react';
import './Report.css';

const Report = (props) => {

    const f = (displayedCosts) => {
        let categoryCount = {};
        displayedCosts?.forEach((cost) => {
            if (cost.Category in categoryCount)
                categoryCount[cost.Category] += Number(cost.Sum);
            else
                categoryCount[cost.Category] = Number(cost.Sum);
        });
        let x = []
        Object.keys(categoryCount)?.forEach((category) => {
            if (category == 'undefined')
                category = 'Other';
            x.push({ Category: category, Sum: categoryCount[category] });
        });
        return x;
    }

    const [data, setData] = useState(); // data for the pie chart (category and sum)
    const fakeData = [
        { Category: 'Food', Sum: 100 },
        { Category: 'Transport', Sum: 200 },
        { Category: 'Clothes', Sum: 300 },
        { Category: 'Entertainment', Sum: 400 }
    ];

    useEffect(() => { setData(f(props.displayedCosts)); }, [props.displayedCosts]);

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



