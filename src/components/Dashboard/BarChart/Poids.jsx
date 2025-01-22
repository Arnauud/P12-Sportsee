import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { UserActivity } from '../../../utility/User';

function CustomLegend() {
  return (
    <div className="custom-legend">
      <span className="legend-item">
        <span className="legend-color" style={{ backgroundColor: 'black' }}></span>Poids (kg)
      </span>
      <span className="legend-item">
        <span className="legend-color" style={{ backgroundColor: 'red' }}></span>Calories brûlées (kCal)
      </span>
    </div>
  );
}

function Poids({ data }) {
  console.log('Dashboard data => poids.jsx ', data);

  const userActivity = new UserActivity({ sessions: data });
  const formattedSessions = userActivity.sessions;
  console.log('Dashboard userActivity  => ', userActivity);

  console.log('Dashboard formattedSessions => ', formattedSessions);


  const kilogramValues = formattedSessions.map((entry) => entry.kilogram);
  const minKilogram = Math.min(...kilogramValues) - 5;
  const maxKilogram = Math.max(...kilogramValues) + 5;

  const calorieValues = formattedSessions.map((entry) => entry.calories);
  const minCalories = Math.min(...calorieValues) - 50;
  const maxCalories = Math.max(...calorieValues) + 50;

  return (
    <section
      className="dashboard-barChart"
      >
      <div
        className="chart-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3 className="chart-title">Activité quotidienne</h3>
        <CustomLegend />
      </div>
      <ResponsiveContainer height={320}>
        <BarChart
          className="custom-bar-chart"
          data={formattedSessions}
          barGap={5}
          barCategoryGap={0}
        >
          <CartesianGrid strokeDasharray="1 3" horizontal={true} vertical={false} />
          <XAxis dataKey="day" />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[minKilogram, maxKilogram]}
            axisLine={false}
            allowDecimals={false}
          />
          <YAxis
            yAxisId="left"
            domain={[minCalories, maxCalories]}
            axisLine={false}
            allowDecimals={false}
            hide={true}
          />
          <Tooltip formatter={(value, name) => 
            userActivity.getFormattedTooltip(name, value)} />
          <Bar
            yAxisId="right"
            className="kilogram-bar"
            dataKey="kilogram"
            name="Poids (kg)"
            barSize={7}
            radius={[3, 3, 0, 0]}
            fill="black"
          />
          <Bar
            yAxisId="left"
            className="calories-bar"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            barSize={7}
            radius={[3, 3, 0, 0]}
            fill="red"
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default Poids;
