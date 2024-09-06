import React from "react";
import './HeaderTextContent.css';

type Props = {
    text: string;
    color: string;
};

const HeaderTextContent = (props: Props) => {
    return(
        <div className="contentFont" style={{color: props.color}}>{props.text}</div>
    );
};

export default HeaderTextContent;