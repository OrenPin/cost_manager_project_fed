import React, { useEffect, useState } from "react";
import './ChooseDate.css'

function ChooseDate(props) {
    return (<div className='chooseDateDiv'>
        <span>
            <label>Month | Year:</label>
            <input type="month" onChange={props.handleMonthChange} />
        </span>
        <button className='reportButton' onClick={props.handleReportGeneration}>Generate Report</button>
        <button className='reportButton' onClick={props.closeReport}>Close Report</button>
    </div>);
}

export default ChooseDate;