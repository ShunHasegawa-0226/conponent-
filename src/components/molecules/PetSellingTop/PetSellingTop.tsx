import './PetSellingTop.css';
import PetFontText from "../../atm/PetFontText/PetFontText";
import PetButton from "../../atm/PetButton/PetButton";

const PetSellingTop = () => {
    return(
        <div className="petSellingTop">
            <div className='petSellingTopText'>
                <PetFontText size={"55px"} color={"#41403E"} text={"Best selling products"} />
            </div>
            <div className='petSellingTopBtn'>
                <PetButton height={"74px"} width={"217px"} text={"SHOP ALL →"} borderColor={"#41403E"} />
            </div>
        </div>
    );
};

export default PetSellingTop;