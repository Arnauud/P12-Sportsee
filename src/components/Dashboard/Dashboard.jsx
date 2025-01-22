import React from 'react';
import { useParams } from "react-router-dom";
import Header from './Header/Header';
import Poids from './BarChart/Poids.jsx';
import Objectifs from './LineChart/objectifs.jsx';
import RadarChartComponent from '../Dashboard/Radar/radar.jsx';
import KPI from '../Dashboard/KPI/kpi.jsx';
import MacroNutrient from './MacroNutrient/MacroNutrient';
import useFetchUserData from '../../utility/apiFetchData.js';
import useFetchUserMockData from '../../utility/mockFetchData.js';
import ErrorMessage from './Error.jsx';

function Dashboard() {
  const { userId } = useParams(); // Extract the userId from the URL

  // Choose between mock or live data based on the environment variable
  const isMockData = import.meta.env.VITE_USE_MOCK_DATA === 'true';

  try {
    const {
      nutrientData,
      userInfo,
      poidsData,
      userPerformance,
      userAverageSessions,
    } = isMockData ? useFetchUserMockData(userId) : useFetchUserData(userId);

    // Handle loading state
    if (!nutrientData || !userInfo || !poidsData || !userPerformance || !userAverageSessions) {
      return <ErrorMessage userId={userId} />;
    }

    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = nutrientData;
    const { firstName, todayScore } = userInfo;

    return (
      <section className="dashboard">
        <div className="dashboard-container">
          <Header firstName={firstName} />
          <div className="dashboard-main">
            <div className="dashboard-left">
              <Poids data={poidsData} />
              <section className="dashboard-miniChart">
                <Objectifs
                  userId={userId}
                  userAverageSessions={userAverageSessions}
                />
                <RadarChartComponent performanceData={userPerformance} />
                <KPI todayScore={todayScore} />
              </section>
            </div>
            <div className="dashboard-right">
              <MacroNutrient
                calories={calorieCount}
                proteines={proteinCount}
                glucides={carbohydrateCount}
                lipides={lipidCount}
              />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error loading user data:', error);

    // Render an error message if fetching fails
    return (
      <section className="dashboard-error">
        <h1>Error</h1>
        <p>Unable to load the dashboard. The user ID "{userId}" may not exist or data retrieval failed.</p>
      </section>
    );
  }
}

export default Dashboard;

