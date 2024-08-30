import "./notFound.scss";
import { Link } from "react-router-dom";

// NotFound component to display a 404 error message
export default function NotFound() {
  return (
    <div className="error404">
      {/* Display the 404 error message */}
      <h1>404 - Not Found!</h1>
      <p>Sorry, something went wrong</p>
      {/* Link to navigate back to the home page */}
      <Link to="/">Get back Home!</Link>
    </div>
  );
};