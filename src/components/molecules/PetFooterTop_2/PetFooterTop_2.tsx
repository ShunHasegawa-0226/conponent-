import './PetFooterTop_2.css';
import PetFontText from "../../atm/PetFontText/PetFontText";


const PetFooterTop_2 = () => {
    return(
        <div className="petFooterTop2">
            <PetFontText text={"ouick links"} size={"26px"} color={"#41403E"} />
            <a className="lhLink" href="https://respawn.littleheroes.jp/">LH</a>
        </div>
    );
};

export default PetFooterTop_2;