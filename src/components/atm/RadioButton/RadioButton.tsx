import * as React from 'react';
import './RadioButton.css';


type Props = {
    size: 'small' | 'large';
    color: string;
    label?: string;
}

const RadioButton = (props: Props) => {
    return (
        <label className='label'>
            <input type='radio' name="radioButton" className={`${props.size}RadioButton`} style={{ accentColor: props.color }} />
            {props.label}
        </label>
    );
};

export default RadioButton;