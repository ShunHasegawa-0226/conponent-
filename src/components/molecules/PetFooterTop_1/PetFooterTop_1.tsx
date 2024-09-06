import './PetFooterTop_1.css';
import PetFontText from "../../atm/PetFontText/PetFontText";
import PetLogo from "../../atm/PetLogo/PetLogo";
import PetSocialIcon from '../../atm/PetIcons/PetSocialIcon';


const PetFooterTop_1 = () => {
    return(
        <div className="petFooterTop1">
            <PetLogo />
            <PetFontText
            text={"Subscribe to our newsletter to get updates about our grand offers."}
            size={"16px"} color={"#908F8D"} />
            <div className='socialIcons'>
                <PetSocialIcon social={"facebock"} backColor={"#DEAD6F"} fontColor={"#FFFFFF"} border={"none"} />
                <PetSocialIcon social={"twitter"} backColor={"transparent"} fontColor={"#CACACA"} border={"solid 1px #D9D9D8"} />
                <PetSocialIcon social={"pinterest"} backColor={"transparent"} fontColor={"#CACACA"} border={"solid 1px #D9D9D8"} />
                <PetSocialIcon social={"instagram"} backColor={"transparent"} fontColor={"#CACACA"} border={"solid 1px #D9D9D8"} />
                <PetSocialIcon social={"youtube"} backColor={"transparent"} fontColor={"#CACACA"} border={"solid 1px #D9D9D8"} />
            </div>
        </div>
    );
};

export default PetFooterTop_1;