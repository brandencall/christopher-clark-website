//AchievementCard
interface Props {
    image: string;
    title: string;
    size: number;
}

function AchievementCard(props: Props) {
    return (
        <div className="achievment-card-container">
            <img  src={props.image} alt={props.title} width={props.size} height={props.size} />
            <h2>{props.title}</h2>
        </div>
    );
}

export default AchievementCard;
