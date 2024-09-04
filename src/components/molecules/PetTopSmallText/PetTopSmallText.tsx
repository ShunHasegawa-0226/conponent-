import './PetTopSmallText.css';
import PetFontText from "../../atm/PetFontText/PetFontText";
import PetButton from "../../atm/PetButton/PetButton";


const PetTopSmallText = () => {
    return(
        <div className="petTopSmallText">
            <PetFontText text={"Upto 40% OFF"} size={"36px"} color={"#DEAD6F"} />
            <PetFontText text={"CLEARANCE"} size={"75px"} color={"#41403E"} />
            <PetFontText text={"SALE !!!"} size={"75px"} color={"#41403E"} />
            <div className="petTopSmallBtn">
                <PetButton height={"74px"} width={"217px"} text={"SHOP NOW →"} borderColor={"#41403E"} />
            </div>
        </div>
    );
};

export default PetTopSmallText;