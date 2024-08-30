import './header.scss' // Importing the stylesheet for the header component
import Logo from '../../assets/logo.png' // Importing the logo image
import Hamb from '../../assets/hamb.svg' // Importing the hamburger menu icon
import { useDataContext } from '../../context/dataContext' // Importing the custom hook to access the data context
import { Link } from 'react-router-dom'; // Importing the Link component from react-router-dom for navigation
import { useState } from 'react'; // Importing the useState hook from React

// Defining the Header component as the default export
export default function Header() {
    // Destructuring userId from the data context using the custom hook
    const { userId } = useDataContext();
    // Defining a state variable toggleMenu with its setter function setToggleMenu, initialized to false
    const [toggleMenu, setToggleMenu] = useState(false);
    
    return (
        // The main header element with a class name for styling
        <header className="header">
            {/* Logo image with a class name for styling and an alt text for accessibility */}
            <img className="header_img" src={Logo} alt="SportSee - logo" />
            {/* Hamburger menu icon with a class name for styling, an alt text, and an onClick event to toggle the menu */}
            <img className="header_hamb" src={Hamb} alt="SportSee - menu" onClick={() => setToggleMenu(!toggleMenu)} />
            {/* Navigation element with a dynamic class name based on the toggleMenu state */}
            <nav className={toggleMenu ? "header_nav visible" : "header_nav"}>
                {/* Unordered list for navigation links */}
                <ul>
                    {/* Link to the home page */}
                    <Link to="/">
                        <li>Accueil</li> {/* List item for the home page */}
                    </Link>
                    {/* Link to the profile page, dynamically constructed using userId */}
                    <Link to={userId && `/profile/${userId}`}>
                        <li>Profil</li> {/* List item for the profile page */}
                    </Link>
                    {/* Link to the settings page */}
                    <Link to="/">
                        <li>Réglages</li> {/* List item for the settings page */}
                    </Link>
                    {/* Link to the community page */}
                    <Link to="/">
                        <li>Communauté</li> {/* List item for the community page */}
                    </Link>
                </ul>
            </nav>
        </header>
    )
}