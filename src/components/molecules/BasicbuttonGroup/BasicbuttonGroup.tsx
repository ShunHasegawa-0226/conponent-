import BasicButton from '../../atm/BasicButton/BasicButton';
import './BasicbuttonGroup.css';

const BasicbuttonGroup = () => {
    return(
        <div className='buttonGroup'>
            <BasicButton size={"large"} color={"black"} btnText={"条件クリア"}></BasicButton>
            <BasicButton size={"large"} color={"black"} btnText={"検索"}></BasicButton>
        </div>
    );
};

export default BasicbuttonGroup;