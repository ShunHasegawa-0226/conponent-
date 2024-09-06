import './PetImgGroup.css';
import PetImg from "../../atm/PetImg/PetImg";



const PetImgGroup = () => {
    return(
        <div className="petImgGroup">
            <PetImg img={"../../../../images/PetImg_1.png"} />
            <PetImg img={"../../../../images/PetImg_2.png"} icon={true} />
            <PetImg img={"../../../../images/PetImg_3.png"} />
            <PetImg img={"../../../../images/PetImg_4.png"} />
            <PetImg img={"../../../../images/PetImg_5.png"} />
            <PetImg img={"../../../../images/PetImg_6.png"} />
        </div>
    );
};

export default PetImgGroup;