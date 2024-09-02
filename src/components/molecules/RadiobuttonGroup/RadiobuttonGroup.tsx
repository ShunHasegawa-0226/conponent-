import RadioButton from '../../atm/RadioButton/RadioButton';

const RadiobuttonGroup = () =>{
    return(
        <h3>年齢：
            <RadioButton size={"small"} color={"white"} label={"〜30歳"}></RadioButton>
            <RadioButton size={"small"} color={"white"} label={"31歳〜50歳"}></RadioButton>
            <RadioButton size={"small"} color={"white"} label={"51歳〜"}></RadioButton>
        </h3>
    );
};

export default RadiobuttonGroup;