import { getUserData } from "../data/getDatas";
import { createContext, useContext, useEffect, useState } from "react";

// Create a context for managing user data
export const DataContext = createContext();

// Provider component to wrap around parts of the app that need access to the data context
export const DataContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(""); // State to store the user ID
  const [error, setError] = useState(false); // State to track if there was an error fetching data

  // State to store the environment (development or production), initialized from localStorage
  const [env, setEnv] = useState(
    JSON.parse(localStorage.getItem("env")) || null
  );

  // States to store various types of user data
  const [userPerformance, setUserPerformance] = useState(null);
  const [userInfos, setUserInfos] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAvgSessions, setUserAvgSessions] = useState(null);

  // Effect to fetch user data whenever userId or env changes
  useEffect(() => {
    if (!userId) return; // If no userId is set, do nothing

    // Function to fetch user data
    const fetchData = async () => {
      try {
        // Fetch user activity data
        const userActivityData = await getUserData(userId, env, "activity");
        setUserActivity(userActivityData);

        // Fetch user info data
        const userInfoData = await getUserData(userId, env, "infos");
        setUserInfos(userInfoData);

        // Fetch user average sessions data
        const avgSessionsData = await getUserData(userId, env, "averageSessions");
        const userAvgSessionsData = avgSessionsData.getSessions();
        setUserAvgSessions(userAvgSessionsData);

        // Fetch user performance data
        const performanceData = await getUserData(userId, env, "performance");
        const userPerformanceData = performanceData.getPerformance();
        setUserPerformance(userPerformanceData);
      } catch (error) {
        setError(true); // Set error state to true if fetching data fails
      }
    };

    fetchData(); // Call the fetchData function
  }, [userId, env]); // Dependencies: userId and env

  return (
    // Provide the context values to children components
    <DataContext.Provider
      value={{
        env,
        userId,
        setUserId,
        setEnv,
        userAvgSessions,
        userInfos,
        userPerformance,
        setError,
        error,
        userActivity
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the DataContext
export const useDataContext = () => useContext(DataContext);