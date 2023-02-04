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
        props.setVisible(true);
        let costs = await getData('costs');
        let filteredCosts = costs.filter(cost => {
            let date = new Date(cost.Date);
            return date.getMonth() === selectedMonth && date.getFullYear() === selectedYear;
        });
        setDisplayedCosts(filteredCosts);
    };

    const closeReport = () => {
        props.setVisible(false);
    };

    useEffect(() => {
        props.setVisible(props.visible);
    }, [props.visible]);

    return (
        <div className= "reportDiv" style={{height: props.visible ? '100%': '5%'}}>
            <div className="reportDivs" style={{display: props.visible ? 'flex' : 'none'}}>
            <div className='graphAndTableContainer'>         
                <table className = "costsTable" >
                <thead >
                    <tr className='tableHeader'>
                    {props.fields.map((field, index) => {return <th key={index}>{field.label}</th>})}
                    </tr>
                </thead>
                <tbody>
                    {displayedCosts?.map((cost, index) => {
                        return (
                            <tr className='tableRow' key={index}>
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
                <div className='graphDiv'>
                </div>
            </div> 
            </div>  
            <div className='chooseDateDiv'>
                <span>
                    <label>Month | Year:</label>
                <input type="month" onChange={handleMonthChange} />
                </span>
                <button className='reportButton' onClick={handleReportGeneration}>Generate Report</button>
                <button className='reportButton' onClick={closeReport}>Close Report</button>
            </div >
        </div>
    );
};

export default Report;



