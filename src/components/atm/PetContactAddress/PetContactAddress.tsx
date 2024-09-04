import React from "react";
import './PetContactAddress.css';

type Props = {
    tool: "Phon" | "Email";
    address: string;
};

const PetContactAddress = (props: Props) => {
    return(
        <div className="contactAddress">
            <div className="tool">{props.tool}</div>
            <div className="address">{props.address}</div>
        </div>
    );
};

export default PetContactAddress;