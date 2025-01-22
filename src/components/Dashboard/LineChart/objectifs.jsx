import React, { useState, useRef } from 'react';
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from 'recharts';
import './Objectifs.scss';
import { UserAverageSessions } from '../../../utility/User';

const Objectifs = ({ userAverageSessions }) => {
  const [hoverX, setHoverX] = useState(null); // Track mouse hover position
  const chartRef = useRef(null); // Reference to the chart container

  // Process data using UserAverageSessions class
  const userAverage = new UserAverageSessions({ sessions: userAverageSessions });
  const formattedSessions = userAverage.sessions;

  // Custom Tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].value} mins`}</p>
        </div>
      );
    }
    return null;
  };

  // Handle mouse move event
  const handleMouseMove = (e) => {
    if (chartRef.current) {
      const chartWidth = chartRef.current.offsetWidth; // Get the width of the chart
      const chartLeft = chartRef.current.getBoundingClientRect().left; // Get the left offset of the chart

      const mouseX = e.clientX - chartLeft; // Calculate the mouse X position within the chart

      // If the mouse is within the chart bounds
      if (mouseX >= 0 && mouseX <= chartWidth) {
        setHoverX(mouseX); // Set the hover position
      }
    }
  };

  return (
    <section className="objectifs-chart">
      <h3 className="objectifs-title">Durée moyenne des sessions</h3>
      <div
        className="chart-container"
        ref={chartRef}
        onMouseMove={handleMouseMove} // Add mouse move listener
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedSessions}
            margin={{ top: 30, right: 30, bottom: 30, left: 15 }}
          >
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="rightOpacityGradient" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0.5)" />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: '#FFFFFF' }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} cursor={false} />

            {/* Create a rectangle on hover that darkens the right side */}
            {hoverX !== null && (
              <rect
                x={hoverX} // Start the opacity effect from the mouse X position
                y="0"
                width="100%" // Stretch the rectangle to the right side
                height="100%" // Stretch the rectangle to cover the full height of the chart
                fill="url(#rightOpacityGradient)"
                pointerEvents="none"
              />
            )}

            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFFFFF"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Objectifs;
