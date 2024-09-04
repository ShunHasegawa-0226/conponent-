import PetFontText from '../PetFontText/PetFontText';
import './PetButton.css';

type Props = {
    height: string;
    width: string;
    text?: string;
    borderColor: string;
};

const PetButton = (props: Props) => {
    return(
        <button className="petBtn" style={{height: props.height, width: props.width, borderColor: props.borderColor}}>
            <PetFontText text={`${props.text}`} size={"19px"} color={"#41403E"}></PetFontText></button>
    );
};

export default PetButton;