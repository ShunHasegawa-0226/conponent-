import LinkButton from "../../atm/LinkButton/LinkButton";

const SearchFormBackBtn = () => {
    return(
        <LinkButton size={"large"} color={"white"} btnText={"一覧ページに戻る"} link={`/`}></LinkButton>
    );
};

export default SearchFormBackBtn;