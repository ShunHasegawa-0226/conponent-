import React from "react";

type Props = {
    text: string;
};

const TitleText = (props: Props) => {
    return(
        <h1>{props.text}</h1>
    );
};

export default TitleText;