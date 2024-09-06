import './PetTopText.css';
import PetButton from "../../atm/PetButton/PetButton";
import PetFontText from "../../atm/PetFontText/PetFontText";

const PetTopText = () => {
    return(
        <div className="petTopText">
            <PetFontText text={"Best Destination"} size={"88px"} color={"black"} />
            <PetFontText text={"For LH"} size={"88px"} color={"black"} changeText={" Pets"} chageColor="#DEAD6F" />
            <div className="petTopBtn">
                <PetButton height={"74px"} width={"225px"} text={"SHOP NOW →"} borderColor={"#41403E"} />
            </div>
        </div>
    );
};

export default PetTopText;