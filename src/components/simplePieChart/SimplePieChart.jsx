import React from 'react';
import './pieChart.scss';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

// Functional component for the Pie Chart
const SimplePieChart = ({ data }) => {
    const score = data.score; // Extract the score from the data prop

    return (
        // ResponsiveContainer to make the chart responsive
        <ResponsiveContainer width="100%" height="100%" className="pieChart">
            {/* PieChart component to create the pie chart */}
            <PieChart>
                {/* Title text */}
                <text 
                    x={40} // X position of the text
                    y={40} // Y position of the text
                    fill="#20253A" // Text color
                    fontWeight={500} // Font weight
                    textAnchor="left" // Text anchor position
                    dominantBaseline="central" // Vertical alignment
                >
                    <tspan fontSize="15">Score</tspan> {/* Text content */}
                </text>
                
                {/* Background circle */}
                <circle 
                    cx="50%" // Center X position of the circle
                    cy="50%" // Center Y position of the circle
                    r="90" // Radius of the circle
                    fill="#fff" // Fill color of the circle
                />
                
                {/* Pie chart */}
                <Pie
                    data={[data]} // Data for the pie chart
                    dataKey="score" // Key to determine the value for each slice
                    innerRadius={90} // Inner radius of the pie chart
                    outerRadius={100} // Outer radius of the pie chart
                    startAngle={90} // Starting angle of the pie chart
                    endAngle={(score * 360) + 90} // Ending angle of the pie chart based on the score
                >
                    <Cell fill="#FF0000" cornerRadius="50%" /> {/* Pie slice with red color and rounded corners */}
                </Pie>
                
                {/* Center text */}
                <text 
                    x="50%" // Center X position of the text
                    y="50%" // Center Y position of the text
                    fill="#20253A" // Text color
                    fontWeight={500} // Font weight
                    textAnchor="middle" // Text anchor position
                    dominantBaseline="central" // Vertical alignment
                >
                    <tspan x="50%" y="45%" fontSize="26">{score * 100}%</tspan> {/* Score percentage */}
                    <tspan x="50%" y="54%" fontSize="16" fill='#74798C'>de votre</tspan> {/* Additional text */}
                    <tspan x="50%" y="62%" fontSize="16" fill='#74798C'>objectif</tspan> {/* Additional text */}
                </text>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default SimplePieChart;
