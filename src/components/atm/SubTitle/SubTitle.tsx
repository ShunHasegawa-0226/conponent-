import * as React from 'react';
import './SubTitle.css';

type Props = {
    text: string;
};

const SubTitle = (props: Props) => {
    return(
        <h3 className='SubTitle'>{props.text}</h3>
    )
}

export default SubTitle;