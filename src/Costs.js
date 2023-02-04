import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { saveData } from './localStorage';

const Costs = (props) => {
    // use state for the costs for useEffect rendering and the current cost for the form
    const [currCost, setCurrCost] = useState({});
    const [costs, setCosts] = useState([]);

    // function that handles the change of the input fields
    const handleChange = (e, inputname) => {
        const { value = "" } = e.currentTarget;
        const newcurrCost = { ...currCost };
        newcurrCost[inputname] = value;
        setCurrCost(newcurrCost);
    };

    // function that handles the submit of the form and adds the current cost to the costs array,
    // then resets the values in currCost for the next item
    const handleSubmit = async (e) => {
        e.preventDefault();
        await saveData('costs', currCost);
        setCosts([...costs, currCost]);
        setCurrCost({
            Category: '',
            Quantity: '',
            Description: '',
            Sum: '',
            Date: '',
        });
        // reset the values in currCost
    };

    //function that renders the table after submit with use effect
    useEffect(() => {
        props.setCosts(costs);
    }, [costs]);

    useEffect(() => {
        props.setVisible(props.visible);
    }, [props.visible]);

    return (
        // form for the costs
        <div className="formDiv" style={{ display: props.visible ? 'none' : 'flex' }}>
            <form className="costsForm" onSubmit={handleSubmit}>
                {props.fields.map((field, index) => {
                    return (
                        <span className="costsFormInputLabel" key={index}>
                            <label className="textDiv">{field.label}</label>
                            <input className="costsFormInput" type={field.type} name={field.name} value={currCost[field.name]} onChange={(e) => handleChange(e, field.name)} />
                            <br />
                        </span>
                    );
                })}
                <button className='formBtn' type="submit">Add</button>
            </form>
            <table className="costsTable">
                <thead>
                    <tr className='tableHeader'>
                        {props.fields.map((field, index) => { return <th key={index}>{field.label}</th> })}
                    </tr>
                </thead>
                <tbody>
                    {costs?.map((cost, index) => {
                        return (<tr className='tableRow' key={index}>
                            <td>{cost.Category}</td>
                            <td>{cost.Quantity}</td>
                            <td>{cost.Description}</td>
                            <td>{cost.Sum}</td>
                            <td>{cost.Date}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Costs;
