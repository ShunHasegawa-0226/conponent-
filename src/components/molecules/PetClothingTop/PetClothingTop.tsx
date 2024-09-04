import './PetClothingTop.css';
import PetFontText from "../../atm/PetFontText/PetFontText";
import PetButton from "../../atm/PetButton/PetButton";

const PetclothingTop = () => {
    return(
        <div className="petClothingTop">
            <div className='petClothingTopText'>
                <PetFontText size={"55px"} color={"#41403E"} text={"Pet Clothing"} />
            </div>
            <div className='petClothingTopBtn'>
                <PetButton height={"74px"} width={"217px"} text={"SHOP ALL →"} borderColor={"#41403E"} />
            </div>
        </div>
    );
};

export default PetclothingTop;