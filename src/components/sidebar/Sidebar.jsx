import './sidebar.scss'; // Importing the stylesheet for the sidebar component
import CyclingLogo from '../../assets/cycling.png'; // Importing the cycling logo image
import LiftLogo from '../../assets/lift.png'; // Importing the lift (bodybuilding) logo image
import MeditatingLogo from '../../assets/meditating.png'; // Importing the meditating logo image
import SwimmingLogo from '../../assets/swim.png'; // Importing the swimming logo image
import { Link } from 'react-router-dom'; // Importing the Link component from react-router-dom for navigation

// Defining the Sidebar component as the default export
export default function Sidebar() {
    return (
        // The main aside element with a class name for styling
        <aside className='sidebar'>
            {/* Navigation element within the sidebar */}
            <nav className='sidebar_nav'>
                {/* Unordered list for navigation links */}
                <ul>
                    {/* List item for the meditation link */}
                    <li>
                        {/* Link to the home page */}
                        <Link to='/'>
                            {/* Meditation logo image with an alt text for accessibility */}
                            <img src={MeditatingLogo} alt="Meditation" />
                        </Link>
                    </li>
                    {/* List item for the swimming link */}
                    <li>
                        {/* Link without a specified path (could be updated to a specific route) */}
                        <Link>
                            {/* Swimming logo image with an alt text for accessibility */}
                            <img src={SwimmingLogo} alt="Swimming" />
                        </Link>
                    </li>
                    {/* List item for the cycling link */}
                    <li>
                        {/* Link without a specified path (could be updated to a specific route) */}
                        <Link>
                            {/* Cycling logo image with an alt text for accessibility */}
                            <img src={CyclingLogo} alt="Cycling" />
                        </Link>
                    </li>
                    {/* List item for the bodybuilding link */}
                    <li>
                        {/* Link without a specified path (could be updated to a specific route) */}
                        <Link>
                            {/* Bodybuilding logo image with an alt text for accessibility */}
                            <img src={LiftLogo} alt="BodyBuilding" />
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* Footer element within the sidebar */}
            <footer className='sidebar_footer'>
                {/* Paragraph element for the copyright notice */}
                <p>Copiryght, SportSee 2020</p>
            </footer>
        </aside>
    )
}