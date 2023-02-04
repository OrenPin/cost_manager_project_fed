import React, { useEffect, useState } from 'react';
import { getData } from './localStorage';

const Report = (props) => {

    return (
        <div className= "reportDiv" style={{display: props.visible ? 'flex' : 'none'}}>
            <div className='graphAndTableContainer'>         
                <table className = "costsTable" >
                <thead >
                    <tr className='tableHeader'>
                    {props.fields.map((field, index) => {return <th key={index}>{field.label}</th>})}
                    </tr>
                </thead>
                <tbody>
                    {props.displayedCosts?.map((cost, index) => {
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
    );
};

export default Report;



