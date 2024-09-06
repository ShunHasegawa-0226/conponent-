import LinkButton from "../../atm/LinkButton/LinkButton";

type Props = {
    id: number;
    name: string;
    age: number;
};

const DetailContent = (props: Props) => {
    return(
        <div>
            <h3>ID：{props.id}</h3>
            <h3>氏名：{props.name}</h3>
            <h3>年齢：{props.age}</h3>
            <LinkButton size={"large"} color={"white"} btnText={"一覧ページに戻る"} link={`/`} />
        </div>
    );
};

export default DetailContent;