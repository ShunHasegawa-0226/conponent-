import './PetHeader.css';
import PetLine from "../../atm/PetLine/PetLine"
import PetHeaderBottom from "../../molecules/PetHeaderBottom/PetHeaderBottom"
import PetHeaderTop from "../../molecules/PetHeaderTop/PetHeaderTop"


const PetHeader = () => {
    return(
        <div className="petHeader">
            <div className='headerChild'>
                <PetHeaderTop />
            </div>
            <PetLine size={"1920px"} />
            <div className='headerChild'>
                <PetHeaderBottom />
            </div>
            
        </div>
    );
};

export default PetHeader;