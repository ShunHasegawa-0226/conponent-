import BasicMenu from "../../atm/Menu/Menu";
import Icon from "../../atm/Icon/Icon";
import SubTitle from "../../atm/SubTitle/SubTitle";
import './HederGroup.css';
import BasicButton from "../../atm/BasicButton/BasicButton";

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
                <BasicButton size={"large"} color={"white"} btnText={"ログイン"} />
            </div>
        </header>
    );
};

export default headerGroup;