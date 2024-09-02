import HeaderGroup from "../../organisms/HeaderGroup/HeaderGroup";
import RegistrationForm from "../../organisms/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
    return(
        <>
            <HeaderGroup subTitle={"登録ページ"} />
            <RegistrationForm />
        </>
    );
};

export default RegistrationPage;