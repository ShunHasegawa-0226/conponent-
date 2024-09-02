import Table from "../Table/Table";
import './TableGroup.css';

const TableGroup = () => {
    return(
        <table className="tb">
            <tr className="th">
                <th></th>
                <th>詳細ボタン</th>
                <th>ID</th>
                <th>氏名</th>
                <th>年齢</th>
                <th>編集ボタン</th>
            </tr>
            <Table id={1} name={"山田太郎"} age={20} link={"/yamadadetail"} />
            <Table id={2} name={"佐藤花子"} age={19} link={"/satodetail"} />
            <Table id={3} name={"鈴木二郎"} age={23} link={"/suzukidetail"} />
            <Table id={4} name={"田中優子"} age={25} link={"tanakadetail"} />
        </table>
    );
};

export default TableGroup;