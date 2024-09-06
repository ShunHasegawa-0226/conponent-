import './PetFooter.css';
import PetFooterTop from "../../molecules/PetFooterTop/PetFooterTop";
import PetFooterBottom from '../../molecules/PetFooterBottom/PetFooterBottom';


const PetFooter = () => {
    return(
        <div className="petFooter">
        <PetFooterTop />
        <PetFooterBottom />
        </div>
    );
};

export default PetFooter;