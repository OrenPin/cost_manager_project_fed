import React from 'react';
import { getData, saveData } from './localStorage';

const Costs = () => {
    const data = getData();
    const [costs, setCosts] = React.useState(Array.isArray(data) ? data : []);
    const [cost, setCost] = React.useState({ sum: "", category: "", description: "", date: new Date() });

    const handleChange = e => {
        setCost({ ...cost, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setCosts([...costs, { ...cost, date: new Date() }]);
        setCost({ sum: "", category: "", description: "" });
        saveData([...costs, { ...cost, date: new Date() }]);
    };

    return (
        <div class= "form_div">
            <form class= "costsForm" onSubmit={handleSubmit}>
                <label class = "costsFormInputLabel">
                    Sum:
                    <input
        
                        type="text"
                        name="sum"
                        value={cost.sum}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label class = "costsFormInputLabel">
                    Category:
                    <input
                        class = "costsFormInput"
                        type="text"
                        name="category"
                        value={cost.category}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label class = "costsFormInputLabel">
                    Description:
                    <input
                        class = "costsFormInput"
                        type="text"
                        name="description"
                        value={cost.description}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Add</button>
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
                    {costs.map((cost, index) => (
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

export default Costs;
