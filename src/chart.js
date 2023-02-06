import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

// component that renders the pie chart
const ReportPieChart = ({ data }) => {
    // colors for the pie chart
    const pieChartColors = ['red', 'yellow', 'orange', 'pink', 'brown', 'grey', 'black'];

    // returns the pie chart
    return (
        <PieChart width={400} height={400} className="pieChart">
            <Pie
                data={data}
                dataKey="Sum"
                nameKey="Category"
                cx={200}
                cy={200}
                fill={null}
                innerRadius={90}
                outerRadius={120}
                paddingAngle={2}
                label
            >
                
                {//sets the colors for the pie chart parts
                data?.map((entry, index) => <Cell key={index} fill={pieChartColors[index % pieChartColors.length]} />)
                }
            </Pie>
            <Tooltip />
        </PieChart>
    );
};

export default ReportPieChart;
