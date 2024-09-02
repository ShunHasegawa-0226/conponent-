import React from 'react';
import './TextField.css';

type Props = {
    size: 'small' | 'large';
    color: string;
};

const TextField = (props: Props) => {
    return(
        <input className={`${props.size}Tf textField`} style={{ backgroundColor: props.color}} type='text'></input>
    )
}

export default TextField;