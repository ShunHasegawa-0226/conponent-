import BasicMenu from "../../atm/Menu/Menu";
import Icon from "../../atm/Icon/Icon";
import SubTitle from "../../atm/SubTitle/SubTitle";
import './HederGroup.css';
import LoginButton from "../../molecules/LoginButton/LoginButton";

type Props = {
    subTitle: string;
};

const headerGroup = (props: Props) => {
    return(
        <header className="Header">
            <BasicMenu></BasicMenu>
            <Icon></Icon>
            <SubTitle text={props.subTitle}></SubTitle>
            <div className="loginBtn">
                <LoginButton></LoginButton>
            </div>
        </header>
    );
};

export default headerGroup;