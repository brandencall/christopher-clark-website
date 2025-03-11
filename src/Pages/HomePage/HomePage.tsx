import HeadShot from "../../assets/ChristopherClarkHeadShot.jpeg";
import "./HomePage.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiCredly } from "react-icons/si";

function HomePage() {
    return (
        <div className="container">
            <img src={HeadShot} alt="Christopher Clark" width="500" className="image"/>
            <div className="text">
                <h2>Christopher Clark</h2>
                <p>Description goes here. Some filler text for now: Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="icon-container">
                    <a href="https://www.linkedin.com/in/christopherc3/" title="LinkedIn">
                        <FaLinkedin className="icons icon-linkedin" />
                    </a>
                    <a href="/ChristopherClarkResume.pdf" title="Resume" target="_blank" rel="noopener noreferrer">
                        <FaFilePdf className="icons icon-pdf" />
                    </a>
                    <a href="mailto:christophersjgrclark@gmail.com" title="Email">
                        <MdEmail className="icons icon-email" />
                    </a>
                    <a href="https://info.credly.com/" title="Credly">
                        <SiCredly className="icons icon-credly" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
