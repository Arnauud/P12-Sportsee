import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function KPI({ todayScore }) {
  // Prepare the data for the RadialBarChart
  const chartData = [
    { name: 'Score', value: todayScore * 100, fill: '#FF0000' }, // Convert score to percentage
  ];

  return (
    <section className="score-chart">
      {/* Title at the top-left corner */}
      <div className="title">
        Score
      </div>

      {/* Chart Wrapper */}
      <div style={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="82%"
            outerRadius="90%"
            barSize={10}
            startAngle={90} // Start at the top (12 o'clock)
            endAngle={90 + 360 * todayScore} // Proportional end angle based on score
            data={chartData}
          >
            <RadialBar
              background
              clockWise
              dataKey="value"
              cornerRadius={5} // Smooth edges
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Inner Circle */}
      <div className="innerCircle-info">
        <p>
          {todayScore * 100}% <br />
          <span>de votre objectif</span>
        </p>
      </div>
    </section>
  );
}

export default KPI;
