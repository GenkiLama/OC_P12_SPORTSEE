import React, { PureComponent } from "react";
import {
  Line,
  ResponsiveContainer,
  LineChart,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";
import "./lineChart.scss";

// Define the SimpleLineChart component as a class extending PureComponent
export default class SimpleLineChart extends PureComponent {
  render() {
    // CustomTooltip component to display tooltip content
    const CustomTooltip = ({ active, payload }) => {
      // Check if the tooltip is active and payload is available
      if (active && payload)
        // Return a paragraph element with the tooltip content
        return <p className="lineChart_tooltip">{`${payload[0].value} min`}</p>;
      // Return null if tooltip is not active
      return null;
    };

    // Function to show overlay effect on the chart
    function showOverlay(e) {
      // Select the overlay element
      let overlay = document.querySelector(".lineChart_overlay");

      // Check if the tooltip is active
      if (e.isTooltipActive) {
        // Get the width of the overlay element
        let windowWidth = overlay.offsetWidth;
        // Calculate the mouse position as a percentage of the overlay width
        let mouseXpercent = Math.floor(
          (e.activeCoordinate.x / windowWidth) * 100
        );

        // Set the background gradient based on mouse position
        overlay.style.background = `linear-gradient(to right, rgb(255,0,0) ${mouseXpercent}%, rgba(0,0,0,0.1) ${mouseXpercent}%`;
      } else {
        // Reset the background if tooltip is not active
        overlay.style.background = "transparent";
      }
    }

    // Function to hide overlay effect
    function hiddeOverlay() {
      // Select the overlay element
      let overlay = document.querySelector(".lineChart_overlay");
      // Reset the background to transparent
      overlay.style.background = "transparent";
    }

    return (
      // ResponsiveContainer to make the chart responsive
      <ResponsiveContainer width="100%" height="100%" className="lineChart">
        {/* Overlay div for background effect */}
        <div className="lineChart_overlay"></div>
        {/* LineChart component from recharts */}
        <LineChart
          data={this.props.data} // Data passed as props
          margin={{
            top: 0,
            right: 20,
            left: 20,
            bottom: 20,
          }}
          onMouseMove={(e) => showOverlay(e)} // Show overlay on mouse move
          onMouseOut={hiddeOverlay} // Hide overlay on mouse out
        >
          {/* Text element for chart title */}
          <text
            x={20}
            y={20}
            fill="#ffffff"
            opacity={0.5}
            fontWeight={500}
            textAnchor="left"
            dominantBaseline="central"
          >
            <tspan x={30} y={40} fontSize="15">
              Durée moyenne des
            </tspan>
            <tspan x={30} y={65} fontSize="15">
              sessions
            </tspan>
          </text>
          {/* XAxis configuration */}
          <XAxis
            dataKey="day" // Key for X-axis data
            axisLine={false} // Hide axis line
            tickLine={false} // Hide tick lines
            tick={{
              fontSize: "clamp(1.5rem, 2vw, 2rem)", // Responsive font size
              fontWeight: "500", // Font weight
              fill: "#fff", // Font color
              opacity: "0.5", // Font opacity
            }}
          />
          {/* YAxis configuration */}
          <YAxis hide={true} domain={["dataMin - 20", "dataMax + 40"]} />
          {/* Tooltip configuration */}
          <Tooltip content={<CustomTooltip />} />
          {/* Line configuration */}
          <Line
            type="natural" // Line type
            dataKey="session" // Key for line data
            stroke="#FBFBFB" // Line color
            dot={false} // Hide dots on the line
            activeDot={{
              stroke: "rgba(255,255,255, 0.3)", // Active dot stroke color
              strokeWidth: 10, // Active dot stroke width
              r: 5, // Active dot radius
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
