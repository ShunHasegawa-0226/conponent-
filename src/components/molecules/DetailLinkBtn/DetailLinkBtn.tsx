import LinkButton from "../../atm/LinkButton/LinkButton";

type Props = {
    link: string;
};

const DetailLinkBtn = (props: Props) => {
    return(
        <LinkButton size={"small"} color={"black"} btnText={"詳細"} link={props.link} />
    );
};

export default DetailLinkBtn;