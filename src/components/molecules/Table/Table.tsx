import React from "react";
import CheckBox from "../../atm/CheckBox/CheckBox";
import EditLinkBtn from "../EditLinkBtn/EditLinkBtn";
import LinkButton from "../../atm/LinkButton/LinkButton";


type Props = {
  id: number;
  name: string;
  age: number;
  link: string;
};

const Table = (props: Props) => {
  return(
    <tr>
      <td><CheckBox size={"small"} color={"white"}></CheckBox></td>
      <td><LinkButton size={"small"} color={"white"} btnText={"詳細"} link={props.link} /></td>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td><EditLinkBtn /></td>
    </tr>
  );
};

export default Table;