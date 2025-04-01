import AchievmentCard from "../../Components/Achievements/AchievementCard.tsx";
import "./Achievements.css";

function Achievements() {
    const PDF = "public/BLS.pdf";
    const HeadShot = "public/ChristopherClarkHeadShot.jpeg";
    return (
        <div className="achievement-grid-container">
            <a className="pdf-link" href={PDF} target="_blank">
                <div className="achievement-grid-item">
                    <AchievmentCard image={HeadShot} title="Title of Cert" size={300} />
                </div>
            </a>
            <a className="pdf-link" href={PDF} target="_blank">
                <div className="achievement-grid-item">
                    <AchievmentCard image={HeadShot} title="Title of Cert" size={300} />
                </div>
            </a>
            <a className="pdf-link" href={PDF} target="_blank">
                <div className="achievement-grid-item">
                    <AchievmentCard image={HeadShot} title="Title of Cert" size={300} />
                </div>
            </a>
            <a className="pdf-link" href={PDF} target="_blank">
                <div className="achievement-grid-item">
                    <AchievmentCard image={HeadShot} title="Title of Cert" size={300} />
                </div>
            </a>
            <a className="pdf-link" href={PDF} target="_blank">
                <div className="achievement-grid-item">
                    <AchievmentCard image={HeadShot} title="Title of Cert" size={300} />
                </div>
            </a>
        </div>
    );
}

export default Achievements;

