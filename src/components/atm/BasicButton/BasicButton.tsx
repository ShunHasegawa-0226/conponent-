import './BasicButton.css';

type Props = {
    size: 'small' | 'large';
    color: string;
    btnText: string;
};

const BasicButton = (props: Props) => {
    return (
        <button className={`button ${props.size}Btn`} style={{ backgroundColor: props.color }} >
            {props.btnText}
        </button>
    )
};

export default BasicButton;
