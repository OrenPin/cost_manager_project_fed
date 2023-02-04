import React from "react";
import { PieChart, Pie} from "recharts";

const ReportPieChart = ({ data }) => {
    return (
        <PieChart width={400} height={400} className="pieChart">
            <Pie data={data} dataKey="Sum" nameKey="Category" cx="50%" cy="50%" fill="#8884d8" label />
        </PieChart>
    );
};

export default ReportPieChart;