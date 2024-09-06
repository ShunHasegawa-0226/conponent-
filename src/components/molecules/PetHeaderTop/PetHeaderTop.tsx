import React from "react";
import './PetHeaderTop.css';
import PetLogo from "../../atm/PetLogo/PetLogo";
import PetContactAddress from "../../atm/PetContactAddress/PetContactAddress";

const PetHeaderTop = () => {
    return(
        <div className="headerTop">
            <PetLogo />
            <div className="contactGroup">
                <PetContactAddress tool={"Phon"} address={"090-0000-0000"} />
                <PetContactAddress tool={"Email"} address={"LH_LP@gmail.com"} />
            </div>
        </div>
    );
};

export default PetHeaderTop;