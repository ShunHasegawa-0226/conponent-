import './PetTopSmall.css';
import PetTopSmallText from "../../molecules/PetTopSmallText/PetTopSmallText";
import SmallDogGroup from "../../molecules/SmallDogGroup/SmallDogGroup";


const PetTopSmall = () => {
    return(
        <div className="petTopSmall">
            <SmallDogGroup />
            <PetTopSmallText />
        </div>
    );
};

export default PetTopSmall;