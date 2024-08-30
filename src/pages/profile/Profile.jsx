import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "../../context/dataContext";
import apple from "../../assets/apple.svg";
import cheeseburger from "../../assets/cheeseburger.svg";
import chicken from "../../assets/chicken.svg";
import energy from "../../assets/energy.svg";
import Card from "../../components/card/Card";
import SimpleBarChart from "../../components/simpleBarChart/SimpleBarChart";
import SimpleLineChart from "../../components/simpleLineChart/SimpleLineChart";
import SimpleRadarChart from "../../components/simpleRadarChart/SimpleRadarChart";
import SimplePieChart from "../../components/simplePieChart/SimplePieChart";
import "./profile.scss";

export default function Profile() {
  // Destructure context values to get user data and error handling functions
  const {
    userId, // Current user ID
    userInfos, // User information data
    setUserId, // Function to set the user ID
    userPerformance, // User performance data
    userActivity, // User activity data
    userAvgSessions, // User average sessions data
    setError, // Function to set error state
    error, // Current error state
  } = useDataContext();

  const navigate = useNavigate(); // Hook to programmatically navigate
  const { id } = useParams(); // Get the user ID from the URL parameters

  // Effect to handle errors and navigate to the not-found page if an error occurs
  useEffect(() => {
    if (error) {
      setError(false); // Reset the error state
      setUserId(null); // Clear the user ID
      navigate("/not-found"); // Navigate to the not-found page
    }
  }, [error, setError, setUserId, navigate]);

  // Effect to set the user ID from the URL parameters
  useEffect(() => {
    setUserId(id); // Set the user ID based on the URL parameter
  }, [id, setUserId]);

  // Show a loading message if any of the required user data is not yet available
  if (
    !userId || // Check if user ID is not available
    !userInfos || // Check if user information is not available
    !userActivity || // Check if user activity data is not available
    !userAvgSessions || // Check if user average sessions data is not available
    !userPerformance // Check if user performance data is not available
  ) {
    return <div>Chargement...</div>; // Return a loading message
  }

  return (
    <main className="profile">
      <header className="profile_title">
        <h1>
          Bonjour <span>{userInfos?.firstName}</span> {/* Display user's first name */}
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p> {/* Congratulatory message */}
      </header>
      <section className="profile_main">
        <section className="profile_main--charts">
          {/* Bar chart for user activity sessions */}
          <SimpleBarChart data={userActivity?.sessions} />
          <div className="profile_main--charts--horizontal">
            {/* Line chart for user average sessions */}
            <SimpleLineChart data={userAvgSessions} />
            {/* Radar chart for user performance */}
            <SimpleRadarChart data={userPerformance} />
            {/* Pie chart for user info */}
            <SimplePieChart data={userInfos} />
          </div>
        </section>
        <div className="profile_main--cards">
          {/* Card components for displaying user nutritional information */}
          <Card
            value={userInfos?.calorieCount} // User's calorie count
            title="Calories" // Title for the card
            img={energy} // Image for the card
            unit="kCal" // Unit for the value
          />
          <Card
            value={userInfos?.proteinCount} // User's protein count
            title="Proteines" // Title for the card
            img={chicken} // Image for the card
            unit="g" // Unit for the value
          />
          <Card
            value={userInfos?.carbohydrateCount} // User's carbohydrate count
            title="Glucides" // Title for the card
            img={apple} // Image for the card
            unit="g" // Unit for the value
          />
          <Card
            value={userInfos?.lipidCount} // User's lipid count
            title="Lipides" // Title for the card
            img={cheeseburger} // Image for the card
            unit="g" // Unit for the value
          />
        </div>
      </section>
    </main>
  );
}