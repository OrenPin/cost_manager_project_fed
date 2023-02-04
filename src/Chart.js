import React from "react";
import { PieChart, Pie, Cell, Tooltip} from "recharts";

const ReportPieChart = ({ data }) => {
    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000', '#000000', '#0000FF', '#00FF00', '#FF00FF', '#FFFF00', '#00FFFF', '#800000', '#808000', '#008000', '#800080', '#808080', '#008080'];
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