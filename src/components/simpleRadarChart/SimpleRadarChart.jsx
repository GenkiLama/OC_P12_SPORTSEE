import React from 'react';
import './radarChart.scss';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';

// SimpleRadarChart component to render a radar chart using Recharts library
const SimpleRadarChart = ({ data }) => (
    // ResponsiveContainer to make the chart responsive
    <ResponsiveContainer width="100%" height="100%" className="simpleRadarChart">
        {/* RadarChart component to create the radar chart */}
        <RadarChart
            cx="50%" // Center X position of the chart
            cy="50%" // Center Y position of the chart
            outerRadius="80%" // Outer radius of the chart
            data={data} // Data to be displayed in the chart
            margin={{ top: 0, right: 40, bottom: 0, left: 40 }} // Margin around the chart
            startAngle={30} // Starting angle of the radar chart
            endAngle={-330} // Ending angle of the radar chart
        >
            {/* PolarGrid component to add grid lines to the chart */}
            <PolarGrid radialLines={false} /> {/* Disable radial lines */}
            
            {/* PolarAngleAxis component to configure the angle axis */}
            <PolarAngleAxis
                axisLine={false} // Disable the axis line
                dataKey="kind" // Key to determine the label for each angle
                tickLine={false} // Disable the tick lines
                tick={{
                    dy: 4, // Vertical offset for the tick labels
                    fill: '#fff', // Color of the tick labels
                    fontSize: 12, // Font size of the tick labels
                }}
            />
            
            {/* Radar component to plot the radar chart */}
            <Radar dataKey="value" fill="#FF0000" fillOpacity={0.6} /> {/* Radar chart with red color and 60% opacity */}
        </RadarChart>
    </ResponsiveContainer>
);

export default SimpleRadarChart;