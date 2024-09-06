import CheckboxGroup from '../../molecules/CheckboxGroup/CheckboxGroup';
import RadiobuttonGroup from '../../molecules/RadiobuttonGroup/RadiobuttonGroup';
import TextfirldGroup from '../../molecules/TextfieldGroup/TextfieldGroup';
import BasicbuttonGroup from '../../molecules/BasicbuttonGroup/BasicbuttonGroup';
import TitleText from '../../atm/TitleText/TitleText';
import './SearchFomr.css';

const SearchForm = () => {
    return(
        <form className='form'>
            <TitleText text={"検索フォーム"} />
            <CheckboxGroup />
            <RadiobuttonGroup />
            <TextfirldGroup label={"名前"} size={"large"} color={"white"} />
            <div className='formBtn'>
                <div className='btnGroup'>
                    <BasicbuttonGroup />
                </div>
            </div>
        </form>
    )
}

export default SearchForm;