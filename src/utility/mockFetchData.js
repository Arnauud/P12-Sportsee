import { useState, useEffect } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../assets/mockData.js"; // Import the mock data

const useFetchUserMockData = (userId) => {
  console.log("Fetching data for userId:", userId); // Debug log
  const [nutrientData, setNutrientData] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [poidsData, setPoidsData] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate fetching user main data
        const userResult = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));
        // if (!userResult) throw new Error(`User with ID ${userId} not found`);
        setNutrientData(userResult.keyData);
        setUserInfo({ ...userResult.userInfos, todayScore: userResult.todayScore });

        // Simulate fetching activity data
        const activityResult = USER_ACTIVITY.find((activity) => activity.userId === parseInt(userId));
        // if (!activityResult) throw new Error(`Activity data for user ID ${userId} not found`);
        setPoidsData(activityResult.sessions);

        // Simulate fetching user performance data
        const performanceResult = USER_PERFORMANCE.find(
          (performance) => performance.userId === parseInt(userId)
        );
        console.log("MOCK_USER_PERFORMANCE data:", performanceResult);
        // if (!performanceResult) throw new Error(`Performance data for user ID ${userId} not found`);
        setUserPerformance(performanceResult);      

        // Simulate fetching average sessions data
        const avgSessionResult = USER_AVERAGE_SESSIONS.find(
          (avgSession) => avgSession.userId === parseInt(userId)
        );
        // if (!avgSessionResult) throw new Error(`Average sessions data for user ID ${userId} not found`);
        setUserAverageSessions(avgSessionResult.sessions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]); // Re-run when userId changes

  return { nutrientData, userInfo, poidsData, userPerformance, userAverageSessions };
};

export default useFetchUserMockData;
