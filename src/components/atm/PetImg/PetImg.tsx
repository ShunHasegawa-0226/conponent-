import InstagramIcon from '@mui/icons-material/Instagram';
import './PetImg.css';

type Props = {
    img: string;
    icon?: boolean;
};

const PetImg = (props: Props) => {
    if (props.icon === true) {

        return(
        <div className='petImg'>
            <img className='petImg' src={props.img} />
            <div className='instIcon'>
                <InstagramIcon />
            </div>
        </div>
        );

    } else {

        return(
        <div className='petImg'>
            <img className='petImg' src={props.img} />
        </div>
        );

    };

};

export default PetImg;