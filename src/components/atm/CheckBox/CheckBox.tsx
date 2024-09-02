import React from 'react';
import './CheckBox.css';

type Props = {
    size: 'small' | 'large';
    color: string;
    label?: string;
};

const CheckBox = (props: Props) => {
    return(
        <label className='label'>
            <input type="checkbox" className={`checkbox${props.size}`} style={{ accentColor: props.color }}></input>{props.label}
        </label>
    )
};

export default CheckBox;