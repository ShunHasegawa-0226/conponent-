
import LargeDogGroup from '../../molecules/LargeDogGroup/LargeDogGroup';
import PetTopText from '../../molecules/PetTopText/PetTopText';
import './PetTop.css';

const PetTop = () => {
    return(
        <div className="petTop">
            <LargeDogGroup />
            <PetTopText />
        </div>
    )
}

export default PetTop;