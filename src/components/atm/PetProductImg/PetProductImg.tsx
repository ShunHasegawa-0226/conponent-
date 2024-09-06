import './PetProductImg.css';
import PetFontText from "../PetFontText/PetFontText";

type Props = {
    pop?: string;
    img: string;
    imgHeight: string;
    imgWidth: string;
    imgTop: string;
    imgLeft: string;
}

const PetProductImg = (props: Props) => {
    const h = props.imgHeight;
    const w = props.imgWidth;
    const t = props.imgTop;
    const l = props.imgLeft;

    if ( props.pop ) {
        return(
            <div className="petProductImg">
                <div className="newIcon">
                    <PetFontText text={props.pop} size={"18px"} color={"#41403E"} />
                </div>
                <img className='productImage' src={props.img} style={{height: h, width: w, top: t, left: l}} />
            </div>
        );
    } else {
        return(
            <div className="petProductImg">
                <img className='productImage' src={props.img} style={{height: h, width: w, top: t, left: l}} />
            </div>
        );
    }
};

export default PetProductImg;