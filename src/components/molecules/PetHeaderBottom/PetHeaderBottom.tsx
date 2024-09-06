import './PetHeaderBottom.css';
import HeaderTextContent from "../../atm/HeaderTextContent/HeaderTextContent";
import PetIconPerson from "../../atm/PetIcons/PetIconPerson";
import PetIconHeart from "../../atm/PetIcons/PetIconHeart";
import PetIconShopping from "../../atm/PetIcons/PetIconShopping";
import PetFontText from '../../atm/PetFontText/PetFontText';

const PetHeaderBottom = () => {
    return(
        <div className="headerBottom">
            <PetFontText text={"Shop By Categories"} size={"19px"} color={"#41403E"} />
            <div className="headerBttomContent">
                <HeaderTextContent text={"TOP"} color={"#DEAD6F"} />
                <HeaderTextContent text={"Petclothing"} color={"#41403E"} />
                <HeaderTextContent text={"PetFoodies"} color={"#41403E"} />
                <div className='BSP'>
                    <HeaderTextContent text={"BestSellingPro"} color={"#41403E"} />
                    <HeaderTextContent text={"ducts"} color={"#41403E"} />
                </div>
                <HeaderTextContent text={"LatesPostblog"} color={"#41403E"} />
            </div>
            <div className='headerBottomIcons'>
                <PetIconPerson />
                <PetIconHeart />
                <PetIconShopping />
            </div>
        </div>
    );
};

export default PetHeaderBottom;