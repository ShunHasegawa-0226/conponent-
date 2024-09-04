import React from "react";
import './PetLine.css';

type Props = {
    size: string;
}

const PetLine = (props: Props) => {
    return(
        <hr className="petLine" style={{width: props.size}} />
    );
};

export default PetLine;