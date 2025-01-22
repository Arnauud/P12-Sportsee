import { useState, useEffect } from 'react';

const useFetchUserData = (userId) => {
  const [nutrientData, setNutrientData] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [poidsData, setPoidsData] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the user data
        const userResponse = await fetch(`http://localhost:3000/user/${userId}`); // put as a variable in the back in the .env
        if (!userResponse.ok) throw new Error(`Failed to fetch user data: ${userResponse.status}`);
        const userResult = await userResponse.json();
        setNutrientData(userResult.data.keyData);
        setUserInfo({ ...userResult.data.userInfos, todayScore: userResult.data.todayScore });

        // Fetch the activity data
        const activityResponse = await fetch(`http://localhost:3000/user/${userId}/activity`);
        if (!activityResponse.ok) throw new Error(`Failed to fetch activity data: ${activityResponse.status}`);
        const activityResult = await activityResponse.json();
        setPoidsData(activityResult.data.sessions);

        // Fetch the user performance data
        const performanceResponse = await fetch(`http://localhost:3000/user/${userId}/performance`);
        if (!performanceResponse.ok) throw new Error(`Failed to fetch user performance data: ${performanceResponse.status}`);
        const performanceResult = await performanceResponse.json();
        console.log("USER_PERFORMANCE data:", performanceResult.data);
        setUserPerformance(performanceResult.data); // Jordan: fetch mock doesn't have .data and it works? .json formating?

        // Fetch the user average session data
        const avgSessionResponse = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
        if (!avgSessionResponse.ok) throw new Error(`Failed to fetch user average sessions: ${avgSessionResponse.status}`);
        const avgSessionResult = await avgSessionResponse.json();
        setUserAverageSessions(avgSessionResult.data.sessions);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]); // Ensure it runs when userId changes

  return { nutrientData, userInfo, poidsData, userPerformance, userAverageSessions };
};

export default useFetchUserData;
