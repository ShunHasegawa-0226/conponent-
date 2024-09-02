import CheckBox from '../../atm/CheckBox/CheckBox';


const CheckboxGroup = () => {
    return(
        <>
            <h3>性別：
                <CheckBox size={"small"} color={"white"} label={"男性"}></CheckBox>
                <CheckBox size={"small"} color={"white"} label={"女性"}></CheckBox>
                <CheckBox size={"small"} color={"white"} label={"その他"}></CheckBox>
            </h3>
        </>
    )
}

export default CheckboxGroup;