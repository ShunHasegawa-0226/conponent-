import './SmallDogGroup.css';
import CircleImg from "../../atm/CircleImg/CircleImg";


const SmallDogGroup = () => {
    return(
        <div className="smallDogGroup">
            <div className="smallDogCircle">
                <CircleImg size={"large"} />
            </div>
            <img className="smallDogImg" src="../../../../images/smallDog.png" />
        </div>
    );
};

export default SmallDogGroup;
