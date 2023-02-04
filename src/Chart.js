import React from "react";
import { PieChart, Pie, Cell, Tooltip} from "recharts";

const ReportPieChart = ({ data }) => {
    // const COLORS = [ 'red', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'grey', 'black'];
    return (
        <PieChart width={400} height={400} className="pieChart">
            <Pie 
                data={data}
                dataKey="Sum" 
                nameKey="Category" 
                cx= {200}
                cy= {200} 
                fill="#000"
                innerRadius={90}
                outerRadius= {120}
                paddingAngle={2}
                label
                >
                     {/* {data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                 } */}
            </Pie>
                <Tooltip />
        </PieChart>
    );
};

export default ReportPieChart;