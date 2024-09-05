import Table from "../Table/Table";
import CheckBox from "../../atm/CheckBox/CheckBox";
import LinkButton from "../../atm/LinkButton/LinkButton";
import BasicButton from "../../atm/BasicButton/BasicButton";
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
            <tr>
                <td><CheckBox size={"small"} color={"white"} /></td>
                <td><LinkButton size={"small"} color={"white"} btnText={"詳細"} link={"/yamadadetail"} /></td>
                <td>1</td>
                <td>山田太郎</td>
                <td>20</td>
                <td><BasicButton size={"large"} color={"white"} btnText={"編集"} /></td>
            </tr>
            <tr>
                <td><CheckBox size={"small"} color={"white"} /></td>
                <td><LinkButton size={"small"} color={"white"} btnText={"詳細"} link={"/satodetail"} /></td>
                <td>2</td>
                <td>佐藤花子</td>
                <td>19</td>
                <td><BasicButton size={"large"} color={"white"} btnText={"編集"} /></td>
            </tr>
            <tr>
                <td><CheckBox size={"small"} color={"white"} /></td>
                <td><LinkButton size={"small"} color={"white"} btnText={"詳細"} link={"/suzukidetail"} /></td>
                <td>3</td>
                <td>鈴木二郎</td>
                <td>23</td>
                <td><BasicButton size={"large"} color={"white"} btnText={"編集"} /></td>
            </tr>
            <tr>
                <td><CheckBox size={"small"} color={"white"} /></td>
                <td><LinkButton size={"small"} color={"white"} btnText={"詳細"} link={"/tanakadetail"} /></td>
                <td>4</td>
                <td>田中優子</td>
                <td>25</td>
                <td><BasicButton size={"large"} color={"white"} btnText={"編集"} /></td>
            </tr>
        </table>
    );
};

export default TableGroup;