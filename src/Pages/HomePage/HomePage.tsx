import ContactIcons from "../../Components/ContanctIcons";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="container">
            <img src="public/ChristopherClarkHeadShot.jpeg" alt="Christopher Clark" width="500" className="image" />
            <div className="text">
                <h2>Christopher Clark</h2>
                <p>Description goes here. Some filler text for now: Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ContactIcons />
            </div>
        </div>
    );
}

export default HomePage;
