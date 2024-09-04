import HeaderGroup from '../../organisms/HeaderGroup/HeaderGroup';
import SearchForm from "../../organisms/SearchForm/SearchForm";
import TableGroup from '../../molecules/TableGroup/TableGroup';
import RegistrationLinkBtn from '../../molecules/RegistrationLinkBtn/RegistrationLinkBtn';
import LinkButton from '../../atm/LinkButton/LinkButton';

const SearchFormPage = () => {
    return(
        <>
            <HeaderGroup subTitle={"一覧画面"} />
            <SearchForm />
            <TableGroup />
            <RegistrationLinkBtn />
            <LinkButton size={"large"} color={"white"} btnText={"デザイン課題へ"} link={"/pet"} />
        </>
    )
}

export default SearchFormPage;