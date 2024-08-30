import React, { PureComponent } from 'react';
import {
  Bar,
  CartesianGrid,
  BarChart,
  Legend,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import './simpleBarChart.scss';

// Define the SimpleBarChart component as a class extending PureComponent
export default class SimpleBarChart extends PureComponent {
  render() {
    // Custom legend text component
    const LegendText = (value) => (
      <span
        style={{
          color: '#74798C', // Text color
          marginRight: '20px', // Right margin
          fontSize: '14px', // Font size
          fontWeight: 600, // Font weight
        }}
      >
        {value}
      </span>
    );

    // Custom tooltip component to display tooltip content
    function CustomTooltip({ active, payload }) {
      // Check if the tooltip is active and payload is available
      if (active && payload) {
        return (
          <div className="barChartWrapper_tooltip">
            {/* Display the kilogram value */}
            <p>{`${payload[0].value}Kg`}</p>
            {/* Display the calories value */}
            <p>{`${payload[1].value}kCal`}</p>
          </div>
        );
      }
      // Return null if tooltip is not active
      return null;
    }

    return (
      <div className="barChartWrapper">
        {/* Title of the bar chart */}
        <h2 className="barChartWrapper_title">Activité quotidienne</h2>
        {/* Responsive container to make the chart responsive */}
        <ResponsiveContainer height="100%" width="100%">
          {/* BarChart component from recharts */}
          <BarChart
            data={this.props.data} // Data passed as props
            barGap={8} // Gap between bars
            margin={{
              top: 100, // Top margin
              right: 40, // Right margin
              left: 40, // Left margin
              bottom: 40, // Bottom margin
            }}
          >
            {/* Cartesian grid for the chart */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            {/* XAxis configuration */}
            <XAxis
              dataKey="day" // Key for X-axis data
              axisLine={true} // Show axis line
              tickLine={false} // Hide tick lines
              tick={{ fontSize: '14px', fontWeight: '500' }} // Tick style
              dy={15} // Offset for ticks
            />
            {/* YAxis configuration for kilogram */}
            <YAxis
              yAxisId="kilogram" // ID for the Y-axis
              orientation="right" // Axis orientation
              tickCount={3} // Number of ticks
              axisLine={false} // Hide axis line
              tickLine={false} // Hide tick lines
              tickMargin={30} // Margin for ticks
              type="number" // Type of data
              tick={{ color: '9B9EAC', fontSize: '14px', fontWeight: '500' }} // Tick style
              domain={['dataMin - 1', 'dataMax + 2']} // Domain for the axis
            />
            {/* YAxis configuration for calories (hidden) */}
            <YAxis yAxisId="calories" hide={true} />
            {/* Tooltip configuration */}
            <Tooltip
              content={<CustomTooltip />} // Custom tooltip content
              cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} // Cursor style
            />
            {/* Legend configuration */}
            <Legend
              verticalAlign="top" // Vertical alignment
              align="right" // Horizontal alignment
              iconSize={10} // Size of the legend icon
              wrapperStyle={{ top: '2rem', right: 0 }} // Wrapper style
              formatter={LegendText} // Custom legend text
            />
            {/* Bar configuration for kilogram */}
            <Bar
              yAxisId="kilogram" // ID for the Y-axis
              dataKey="kilogram" // Key for bar data
              fill="#282D30" // Bar color
              barSize={8} // Size of the bar
              legendType="circle" // Legend icon type
              name="Poids (Kg)" // Name for the legend
              unit="Kg" // Unit for the data
              radius={[20, 20, 0, 0]} // Radius for the bar corners
            />
            {/* Bar configuration for calories */}
            <Bar
              yAxisId="calories" // ID for the Y-axis
              fill="#E60000" // Bar color
              dataKey="calories" // Key for bar data
              barSize={8} // Size of the bar
              name="Calories brûlées (kCal)" // Name for the legend
              legendType="circle" // Legend icon type
              unit="Kcal" // Unit for the data
              radius={[20, 20, 0, 0]} // Radius for the bar corners
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}