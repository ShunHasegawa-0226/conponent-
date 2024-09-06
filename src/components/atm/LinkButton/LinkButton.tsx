import { Link } from "react-router-dom";
import './LinkButton.css';

type Props = {
    size: 'small' | 'large';
    color: string;
    btnText: string;
    link: string;
};

const LinkButton = (props: Props) => {
    return (
        <Link to = {props.link}>
            <button className={`button ${props.size}LinkBtn`} style={{ backgroundColor: props.color }} >
                {props.btnText}
            </button>
        </Link>
    )
};

export default LinkButton;
