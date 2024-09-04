import './PetFooterTop.css';
import PetFooterTop_1 from "../PetFooterTop_1/PetFooterTop_1";
import PetFooterTop_2 from "../PetFooterTop_2/PetFooterTop_2";
import PetFooterTop_3 from '../PetFooterTop_3/PetFooterTop_3';
import PetFooterTop_4 from '../PetFooterTop_4/PetFooterTop_4';


const PetFooterTop = () => {
    return(
        <div className="petFooterTop">
        <PetFooterTop_1 />
        <PetFooterTop_2 />
        <PetFooterTop_3 />
        <PetFooterTop_4 />
        </div>
    );
};

export default PetFooterTop;