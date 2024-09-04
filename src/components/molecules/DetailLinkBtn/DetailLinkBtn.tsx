import LinkButton from "../../atm/LinkButton/LinkButton";

type Props = {
    link: string;
};

const DetailLinkBtn = (props: Props) => {
    return(
        <LinkButton size={"small"} color={"white"} btnText={"詳細"} link={props.link} />
    );
};

export default DetailLinkBtn;