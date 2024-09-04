import './PetFooterTop_4.css';
import PetFontText from "../../atm/PetFontText/PetFontText";


const PetFooterTop_4 = () => {
    return(
        <div className="petFooterTop4">
            <PetFontText text={"Our newsletter"} size={"26px"} color={"#41403E"} />
            <PetFontText
            text={"Subscribe to our newsletter to get updates about our grand offers."}
            size={"16px"} color={"#908F8D"} />
        </div>
    );
};

export default PetFooterTop_4;