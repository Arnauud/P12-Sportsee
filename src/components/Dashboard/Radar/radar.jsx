import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { UserPerformance } from '../../../utility/User';

function RadarChartComponent({ performanceData }) {
  console.log("RadarChartComponent - Received performanceData:", performanceData);

  try {
    // Use the UserPerformance class to process the performanceData
    const userPerformance = new UserPerformance(performanceData);
    const radarData = userPerformance.data; // Pre-formatted data

    console.log("RadarChartComponent - Final radarData for chart:", radarData);

    return (
      <section className="radar-chart">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="71%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              tick={{ fill: 'white', fontSize: '12px' }} // Fixed font size
            />
            <Radar
              name="Performance"
              dataKey="value"
              stroke="red"
              fill="red"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </section>
    );
  } catch (error) {
    console.error("RadarChartComponent - Error processing performanceData:", error);
    return <p>Error loading performance chart. Please check the console for details.</p>;
  }
}

export default RadarChartComponent;
