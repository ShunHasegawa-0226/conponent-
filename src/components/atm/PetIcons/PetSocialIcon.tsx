import './PetSocialIcon.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

type Props = {
    social: "facebock" | "twitter" | "pinterest" | "instagram" | "youtube";
    backColor: string;
    fontColor: string;
    border: string;
};

const PetSocialIcon = (props: Props) => {
    const SNS = props.social;
    const colorB = props.backColor;
    const colorF = props.fontColor;
    const border = props.border;

    if ( SNS === "facebock" ) {
        return(
            <div className='petSocialIconParent' style={{backgroundColor: colorB, border: border}}>
                <div className='petSocialIcon facebock' style={{color: colorF}}>
                    f
                </div>
            </div>
        );    
    } else if ( SNS === "twitter" ) {
        return(
            <div className='petSocialIconParent' style={{backgroundColor: colorB, border: border}}>
                <div className='petSocialIcon' style={{color: colorF}}>
                    <TwitterIcon />
                </div>
            </div>
        );    
    } else if ( SNS === "pinterest" ) {
        return(
            <div className='petSocialIconParent' style={{backgroundColor: colorB, border: border}}>
                <div className='petSocialIcon' style={{color: colorF}}>
                    <PinterestIcon />
                </div>
            </div>
        );    
    } else if ( SNS === "instagram" ) {
        return(
            <div className='petSocialIconParent' style={{backgroundColor: colorB, border: border}}>
                <div className='petSocialIcon' style={{color: colorF}}>
                    <InstagramIcon />
                </div>
            </div>
        );
    } else if ( SNS === "youtube" ) {
        return(
            <div className='petSocialIconParent' style={{backgroundColor: colorB, border: border}}>
                <div className='petSocialIcon' style={{color: colorF}}>
                    <YouTubeIcon />
                </div>
            </div>
        );
    };
};

export default PetSocialIcon;