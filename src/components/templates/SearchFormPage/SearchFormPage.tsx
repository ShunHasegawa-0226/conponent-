import HeaderGroup from '../../organisms/HeaderGroup/HeaderGroup';
import SearchForm from "../../organisms/SearchForm/SearchForm";
import TableGroup from '../../molecules/TableGroup/TableGroup';
import LinkButton from '../../atm/LinkButton/LinkButton';

const SearchFormPage = () => {
    return(
        <>
            <HeaderGroup subTitle={"一覧画面"} />
            <SearchForm />
            <TableGroup />
            <LinkButton size={"large"} color={"white"} btnText={"新規登録"} link={`/registration`} />
            <LinkButton size={"large"} color={"white"} btnText={"デザイン課題へ"} link={"/pet"} />
        </>
    )
}

export default SearchFormPage;