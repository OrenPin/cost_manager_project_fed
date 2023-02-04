import ReportPieChart from './Chart';

const Report = (props) => {

    const fakeData = [
        { Category: 'Food', Sum: 100 },
        { Category: 'Transport', Sum: 200 },
        { Category: 'Clothes', Sum: 300 },
        { Category: 'Entertainment', Sum: 400 }
    ];

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
                    let categoryCount = {
                        props.displayedCosts.forEach((cost) => {
                            if (categoryCount[cost.Category]) {
                                categoryCount[cost.Category]++;
                            } else {
                                categoryCount[cost.Category] = 1;
                            }
                        })}
                        let categoryCountArray = [];
                        for (let category in categoryCount) {
                            categoryCountArray.push({Category: category, Sum: categoryCount[category]});
                        };

                    <ReportPieChart data={categoryCountArray} />
                </div>
            </div>
        </div>
    );
};

export default Report;



