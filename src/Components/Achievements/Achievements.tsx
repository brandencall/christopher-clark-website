import AchievmentCard from "../../Components/Achievements/AchievementCard.tsx";
import "./Achievements.css";

function Achievements() {
    return (
        <div className="achievement-grid-container">
            <a className="pdf-link" href="/BLS.pdf" target="_blank">
                <div className="achievement-grid-item">
                    <AchievmentCard image="/ChristopherClarkHeadShot.JPEG" title="Title of Cert" size={300} />
                </div>
            </a>
            <a className="pdf-link" href="/BLS.pdf" target="_blank">
                <div className="achievement-grid-item">
                    <AchievmentCard image="/ChristopherClarkHeadShot.JPEG" title="Title of Cert" size={300} />
                </div>
            </a>
            <a className="pdf-link" href="/CISA-Cert.pdf" target="_blank">
                <div className="achievement-grid-item">
                    <AchievmentCard image="/CISA-IMG" title="CISA" size={300} />
                </div>
            </a>
            <a className="pdf-link" href="/BLS.pdf" target="_blank">
                <div className="achievement-grid-item">
                    <AchievmentCard image="/ChristopherClarkHeadShot.JPEG" title="Title of Cert" size={300} />
                </div>
            </a>
            <a className="pdf-link" href="/BLS.pdf" target="_blank">
                <div className="achievement-grid-item">
                    <AchievmentCard image="/ChristopherClarkHeadShot.JPEG" title="Title of Cert" size={300} />
                </div>
            </a>
        </div>
    );
}

export default Achievements;

