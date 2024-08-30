import UserActivity from "../model/userActivity";
import UserInfos from "../model/userInfos";
import UserSessions from "../model/userAvgSessions";
import UserPerformance from "../model/userPerformance";
import {
  USER_ACTIVITY,
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mocks";

// Function to get user data based on userId, environment, and data type
export const getUserData = async (userId, env, dataType) => {
  let user; // Variable to store user data

  try {
    let url; // Variable to store the API endpoint URL
    let dataExtractor; // Function to extract data from the API response

    // Determine the URL and data extraction method based on the data type and environment
    switch (dataType) {
      case 'infos':
        if (env === "development") {
          // In development, find the user data from the mock data
          user = USER_MAIN_DATA.find((user) => user.id == userId);
        } else if (env === "production") {
          // In production, set the API endpoint URL and data extraction method
          url = `http://localhost:3000/user/${userId}`;
          dataExtractor = (data) => data.data;
        }
        break;
      case 'activity':
        if (env === "development") {
          // In development, find the user activity data from the mock data
          user = USER_ACTIVITY.find((user) => user.userId == userId);
        } else if (env === "production") {
          // In production, set the API endpoint URL and data extraction method
          url = `http://localhost:3000/user/${userId}/activity`;
          dataExtractor = (data) => data.data;
        }
        break;
      case 'averageSessions':
        if (env === "development") {
          // In development, find the user average sessions data from the mock data
          user = USER_AVERAGE_SESSIONS.find((user) => user.userId == userId);
        } else if (env === "production") {
          // In production, set the API endpoint URL and data extraction method
          url = `http://localhost:3000/user/${userId}/average-sessions`;
          dataExtractor = (data) => data.data;
        }
        break;
      case 'performance':
        if (env === "development") {
          // In development, find the user performance data from the mock data
          user = USER_PERFORMANCE.find((user) => user.userId == userId);
        } else if (env === "production") {
          // In production, set the API endpoint URL and data extraction method
          url = `http://localhost:3000/user/${userId}/performance`;
          dataExtractor = (data) => data.data;
        }
        break;
      default:
        // Throw an error if the data type is invalid
        throw new Error('Invalid data type');
    }

    // If a URL is set, fetch the data from the API
    if (url) {
      const response = await fetch(url); // Fetch data from the API
      const data = await response.json(); // Parse the JSON response
      user = dataExtractor(data); // Extract the relevant data using the dataExtractor function
    }
  } catch (error) {
    // Log any errors that occur during the data fetching process
    console.error(error);
  }

  // Return the appropriate user data model based on the data type
  switch (dataType) {
    case 'infos':
      return new UserInfos(user); // Return user info data
    case 'activity':
      return new UserActivity(user); // Return user activity data
    case 'averageSessions':
      return new UserSessions(user); // Return user average sessions data
    case 'performance':
      return new UserPerformance(user); // Return user performance data
    default:
      // Throw an error if the data type is invalid
      throw new Error('Invalid data type');
  }
};