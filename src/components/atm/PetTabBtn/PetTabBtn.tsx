import './PetTabBtn.css';

type Props = {
    text: string;
    fontColor: string;
    font: string;
    borderColor: string;
};

const PetTabBtn = (props: Props) => {
    return(
        <button className="tabBtn" style={{color: props.fontColor, fontFamily: props.font, borderColor: props.borderColor}}>
            {props.text}
        </button>
    );
};

export default PetTabBtn;