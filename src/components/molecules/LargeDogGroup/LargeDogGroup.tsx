import './LargeDogGroup.css';
import CircleImg from "../../atm/CircleImg/CircleImg";


const LargeDogGroup = () => {
    return(
        <div className="largeDogGroup">
            <div className="largeDogCircle">
                <CircleImg size={"small"} />
            </div>
            <img className="largeDogImg" src="../../../../images/largeDog.png" />
        </div>
    );
};

export default LargeDogGroup;