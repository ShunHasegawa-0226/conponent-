import TextField from "../../atm/TextField/TextField";
import LinkButton from "../../atm/LinkButton/LinkButton";
import BasicButton from "../../atm/BasicButton/BasicButton";

const EditForm = () => {
    return(
        <form>
            <h3>ID：<TextField size={"small"} color={"white"} /></h3>
            <h3>氏名：<TextField size={"large"} color={"white"} /></h3>
            <h3>年齢：<TextField size={"small"} color={"white"} /></h3>
            <LinkButton size={"large"} color={"white"} btnText={"一覧ページに戻る"} link={`/`} />
            <BasicButton size={"large"} color={"white"} btnText={"編集する"} />
        </form>
    );
};

export default EditForm;
