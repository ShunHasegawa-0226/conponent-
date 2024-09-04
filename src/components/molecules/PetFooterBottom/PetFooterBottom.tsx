import PetFontText from '../../atm/PetFontText/PetFontText';
import PetLine from '../../atm/PetLine/PetLine';
import './PetFooterBottom.css';

const PetFooterBottom = () => {
    return(
        <div className='fotterBottom'>
            <PetLine size={"1300px"} />
            <div className='fotterBottomText'>
                <PetFontText text={"©2023 Waggy. All rights reserved."} size={"16px"} color={"#908F8D"} />
                <PetFontText text={"Template design by: Templates Jungle"} size={"16px"} color={"#908F8D"} />
            </div>
        </div>
    );
};

export default PetFooterBottom;