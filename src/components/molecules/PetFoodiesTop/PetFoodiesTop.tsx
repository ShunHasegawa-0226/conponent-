import './PetFoodiesTop.css';
import PetFontText from "../../atm/PetFontText/PetFontText";
import PetButton from "../../atm/PetButton/PetButton";
import PetTabBtn from '../../atm/PetTabBtn/PetTabBtn';

const PetFoodiesTop = () => {
    return(
        <div className="petFoodiesTop">
            <div className='petFoodiesTopText'>
                <PetFontText size={"55px"} color={"#41403E"} text={"Pet Foodies"} />
            </div>
            <div className='petFoodiesTopTab'>
                <PetTabBtn text={"ALL"} fontColor={"#41403E"} font={"Comic Sans MS"} borderColor={"#DEAD6F"} />
                <PetTabBtn text={"CAT"} fontColor={"#41403E"} font={"Comic Sans MS"} borderColor={"#D9D9D8"} />
                <PetTabBtn text={"DOG"} fontColor={"#41403E"} font={"Comic Sans MS"} borderColor={"#D9D9D8"} />
                <PetTabBtn text={"BIRD"} fontColor={"#41403E"} font={"Comic Sans MS"} borderColor={"#D9D9D8"} />
            </div>
            <div className='petFoodiesTopBtn'>
                <PetButton height={"74px"} width={"217px"} text={"SHOP ALL →"} borderColor={"#41403E"} />
            </div>
        </div>
    );
};

export default PetFoodiesTop;