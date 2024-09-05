import TextField from '../../atm/TextField/TextField';

type Props = {
    label: string;
    size: "small" | "large";
    color: string;
}

const TextfirldGroup = (props: Props) => {
    return(
        <h3>{props.label}： 
            <TextField size={props.size} color={props.color} />
        </h3>
    );
};

export default TextfirldGroup;
