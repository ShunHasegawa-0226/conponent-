import TextField from "../../atm/TextField/TextField";
import SearchFormBackBtn from "../../molecules/SearchFormBackBtn/SearchFormBackBtn";
import BasicButton from "../../atm/BasicButton/BasicButton";

const RegistrationForm = () => {
    return(
        <form>
            <h3>ID：<TextField size={"small"} color={"white"} /></h3>
            <h3>氏名：<TextField size={"large"} color={"white"} /></h3>
            <h3>年齢：<TextField size={"small"} color={"white"} /></h3>
            <SearchFormBackBtn />
            <BasicButton size={"large"} color={"white"} btnText={"登録する"} />
        </form>
        )}

export default RegistrationForm;