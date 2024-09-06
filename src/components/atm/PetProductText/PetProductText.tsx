import './PetProductText.css';
import GradeIcon from '@mui/icons-material/Grade';
import PetFontText from "../PetFontText/PetFontText";
import PetButton from '../PetButton/PetButton';
import PetIconHeart from '../PetIcons/PetIconHeart';


type Props = {
    name: string;
};

const PetProductText = (props: Props) => {
    return(
        <div className='productText'>
            <div className="productName">{props.name}</div>
            <div className='review'>
                <div className='star'><GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon /></div>
                <div><PetFontText text={"5.0"} size={"15px"} color={"#908F8D"} /></div>
            </div>
            <div className='place'>$18.00</div>
            <div className='productBtn'>
                <PetButton height={"52px"} width={"178px"} text={"ADD TO CART"} borderColor={"rgba(65, 64, 62,.2)"} />
                <div className='fav'>
                    <PetButton height={"52px"} width={"56px"} text={""} borderColor={"rgba(65, 64, 62,.2)"} />
                    <div className='favBtn'>
                        <PetIconHeart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetProductText;