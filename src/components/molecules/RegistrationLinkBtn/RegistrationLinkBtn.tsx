import LinkButton from "../../atm/LinkButton/LinkButton";

const RegistrationLinkBtn = () => {
    return(
        <LinkButton size={"large"} color={"black"} btnText={"新規登録"} link={`/registration`} />
    );
};

export default RegistrationLinkBtn;