import { FaLinkedin, FaFilePdf, FaEnvelope } from "react-icons/fa";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="container">
            {/* Contact Icons in Grid Layout */}
            <div className="icon-grid">
                {/* Left-aligned LinkedIn */}
                <a href="https://www.linkedin.com/in/christopherjgrclark" target="_blank" rel="noopener noreferrer" className="icon left">
                    <FaLinkedin />
                </a>

                {/* Center-aligned PDF and Email */}
                <div className="icon-center">
                    <a href="/ChristopherClarkResume.pdf" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaFilePdf />
                    </a>
                    <a href="mailto:christophersjgrclark@gmail.com" className="icon">
                        <FaEnvelope />
                    </a>
                </div>

                {/* Right-aligned Credly */}
                <a href="https://www.credly.com/users/christopherjgrclark/badges" target="_blank" rel="noopener noreferrer" className="icon right">
                    <img src="/credly-white.png" alt="Credly" className="credly-icon" />
                </a>
            </div>

            {/* Profile Image */}
            <img
                src="/ChristopherClarkHeadShot.JPEG"
                alt="Christopher Clark"
                className="image"
            />

            {/* Name and Tagline */}
            <h2 className="name">Christopher Clark</h2>
            <h3 className="tagline">Systems Administrator | Future IT Project Manager</h3>

            {/* About Me */}
            <div className="text">
                <p>
                    I got my start in IT the day I enlisted in the U.S. Army as a 25B – Information Technology Specialist.
                    That decision launched me into a fast-paced world of troubleshooting, system support, and secure
                    communications under pressure. I was stationed in South Korea by 2019, where I quickly earned the trust
                    to manage critical tasks—eventually stepping into the role of IT Operations Manager while still holding the
                    rank of Private First Class.
                </p>
                <p>
                    Since transitioning to civilian life, I’ve worked in secure federal environments supporting infrastructure,
                    compliance, and vulnerability management. I’ve continued earning certifications, deepened my technical
                    foundation, and built experience across both defense and commercial networks. Today, I’m pursuing dual
                    graduate degrees in Cybersecurity and Project Management to strengthen the leadership side of my career.
                </p>
                <p>
                    What drives me is the same mindset that set me apart in uniform: taking ownership, learning fast, and finding
                    better ways to support the mission—whether that means solving problems at the keyboard or helping lead people
                    toward the finish line.
                </p>
            </div>
        </div>
    );
}

export default HomePage;
