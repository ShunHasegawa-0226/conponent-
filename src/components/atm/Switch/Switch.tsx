import React from 'react';
import './Switch.css';

type Props = {
    id: string;
    size: 'small' | 'large';
    color: string;
    text: string;
};

const Switch = (props: Props) => {
    return(
        <div className={`${props.size} ToggleSwitch`}>
            <input type="checkbox" id={props.id} className='switchInput' />
            <label htmlFor={props.id} className='switchLabel' style={{ backgroundColor: props.color}}>
                <span className='switchButton'></span>
            </label>
            <span>{props.text}</span>
        </div>
    );
};

export default Switch;