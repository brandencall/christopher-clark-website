import ContactIcons from "../../Components/ContanctIcons";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="container">
            <div className="contact-icons">
                <ContactIcons />
            </div>

            <img
                src="/ChristopherClarkHeadShot.JPEG"
                alt="Christopher Clark"
                className="image"
            />

            <h2 className="name">Christopher Clark</h2>
            <h4 className="tagline">Systems Administrator | Future IT Project Manager</h4>


            <div className="text">
                <p>
                I got my start in IT the day I enlisted in the U.S. Army as a 25B – Information Technology Specialist. That decision launched me into a fast-paced world of troubleshooting, system support, and secure communications under pressure. I was stationed in South Korea by 2019, where I quickly earned the trust to manage critical tasks—eventually stepping into the role of IT Operations Manager while still holding the rank of Private First Class.
                </p>
                <p>
                Since transitioning to civilian life, I’ve worked in secure federal environments supporting infrastructure, compliance, and vulnerability management. I’ve continued earning certifications, deepened my technical foundation, and built experience across both defense and commercial networks. Today, I’m pursuing dual graduate degrees in Cybersecurity and Project Management to strengthen the leadership side of my career.
                </p>
                <p>
                What drives me is the same mindset that set me apart in uniform: taking ownership, learning fast, and finding better ways to support the mission—whether that means solving problems at the keyboard or helping lead people toward the finish line.
                </p>
            </div>
        </div>
    );
}

export default HomePage;
