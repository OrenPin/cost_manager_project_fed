// Eylam Kadden 206516957
// Oren Pinhasov 318552734
import './choosedate.css'

// This component is used to choose the month and year for which the report is to be generated
// It also has a button to generate the report and a button to close the report
// Both of the functions change the visibility of the report component and the costForm component

function ChooseDate(props) {

    return (<div className='chooseDateDiv'>
        <span>
            <label>Month | Year:</label>
            <input type="month" onChange={props.handleMonthChange} value= {new Date().toISOString().slice(0,7)}/>
        </span>
        <button className='reportButton' onClick={props.handleReportGeneration}>Generate Report</button>
        <button className='reportButton' onClick={props.closeReport}>Close Report</button>
    </div>);
}

export default ChooseDate;
