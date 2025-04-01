import ContactIcons from "../../Components/ContanctIcons";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="container">
            <img src="/ChristopherClarkHeadShot.JPEG" alt="Christopher Clark" width="500" className="image" />
            <div className="text">
                <h2>Christopher Clark</h2>
                <p>I began my journey in Information Technology in 2018 the day I raised my right hand and enlisted as a 25B – IT Specialist in the U.S. Army. I didn’t know then how far that leap would take me, but I knew I was ready to build something bigger than myself.

By 2019, I was stationed in South Korea, thrown into the fire of help desk support in a high-tempo environment. It didn’t take long for me to stand out. Thanks to long nights troubleshooting, a genuine hunger to learn, and a drive to always do more than what was expected, I was promoted early—earning the role of IT Operations Manager as a Private First Class (PFC), something rarely seen at that rank.

That promotion unlocked a new chapter.

                </p>
                <ContactIcons />
            </div>
        </div>
    );
}

export default HomePage;
