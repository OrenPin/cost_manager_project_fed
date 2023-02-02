import React, { useEffect, useState } from 'react';
import { saveData } from './localStorage';

const Costs = () => {
    // use state for the costs for useEffect rendering and the current cost for the form
    const [currCost, setCurrCost] = useState({Date: new Date()});
    const [costs, setCosts] = useState([]);

    // function that handles the change of the input fields
    const handleChange = (e, inputname) => {
        const { value = "" } = e.currentTarget;
        const newcurrCost = {...currCost};
        newcurrCost[inputname] = value;
        setCurrCost(newcurrCost);
    };
    
    // function that handles the submit of the form and adds the current cost to the costs array,
    // then resets the values in currCost for the next item
    const handleSubmit = e => {
        e.preventDefault();
        setCosts([...costs, currCost]);
        setCurrCost({Date: new Date()});

        // reset the values in currCost
        setCurrCost({
            Category: '',
            Quantity: '',
            Description: '',
            Sum: '',
            Date: new Date()
        });
    };

    //function that renders the table after submit with use effect
    useEffect(() => {
        // use local storage to save the costs with async functions
        saveData('costs', costs);
        // localStorage.setItem('costs', JSON.stringify(costs));
    }, [costs]);


    return (
        // form for the costs
        <div class= "form_div">
            <form class= "costsForm" onSubmit={handleSubmit}>
            <span class = "costsFormInputLabel">
                <div class = "textDiv">
                    Category:
                    </div>
                    <input
                        class = "costsFormInput"
                        type="text"
                        name="category"
                        value={currCost.Category}
                        onChange={(e) => handleChange(e, 'Category')}
                    />
            </span>
            <br />
            <span class = "costsFormInputLabel">
                <div class = "textDiv">
                    Quantity:
                    </div>
                    <input
                        class = "costsFormInput"
                        type="number"
                        name="quantity"
                        value={currCost.Quantity}
                        onChange={(e) => handleChange(e, 'Quantity')}
                    />
            </span>
            <br />
            <span class = "costsFormInputLabel">
                <div class = "textDiv">
                    Description:
                    </div>
                    <input
                        class = "costsFormInput"
                        type="text"
                        name="description"
                        value={currCost.Description}
                        onChange={(e) => handleChange(e, 'Description')}
                    />
            </span>
            <br />
            <span class = "costsFormInputLabel">
                <div class = "textDiv">
                    Sum:
                    </div>
                    <input
                        class = "costsFormInput"
                        type="number"
                        name="sum"
                        value={currCost.Sum}
                        onChange={(e) => handleChange(e, 'Sum')}
                    />
            </span>
            <br />
                <button type="submit">Add</button>
            </form>
            <table class = "costsTable">
                <thead>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Sum</th>
                </thead>
                <tbody>
                    {costs.map((cost, index) => {
                        return( <tr key={index}>
                            <td>{cost.Category}</td>
                            <td>{cost.Quantity}</td>
                            <td>{cost.Description}</td>
                            <td>{cost.Sum}</td>
                        </tr>);
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Costs;
