import SearchFormBackBtn from "../../molecules/SearchFormBackBtn/SearchFormBackBtn";

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
            <SearchFormBackBtn />
        </div>
    );
};

export default DetailContent;