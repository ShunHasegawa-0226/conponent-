import React from "react";
import './PetFontText.css';

type Props = {
    text: string;
    size: string;
    color: string;
    changeText?: string;
    chageColor?: string;
};

const PetFontText = (props: Props) => {
    return(
        <div className="fontText" style={{color: props.color, fontSize: props.size}}>
            {props.text}
            <span style={{color: props.chageColor}}>{props.changeText}</span>
        </div>
    );
};

export default PetFontText;