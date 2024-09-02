import HeaderGroup from '../../organisms/HeaderGroup/HeaderGroup';
import SearchForm from "../../organisms/SearchForm/SearchForm";
import TableGroup from '../../molecules/TableGroup/TableGroup';
import RegistrationLinkBtn from '../../molecules/RegistrationLinkBtn/RegistrationLinkBtn';

const SearchFormPage = () => {
    return(
        <>
            <HeaderGroup subTitle={"一覧画面"} />
            <SearchForm />
            <TableGroup />
            <RegistrationLinkBtn />
        </>
    )
}

export default SearchFormPage;