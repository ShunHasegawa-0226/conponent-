import CheckboxGroup from '../../molecules/CheckboxGroup/CheckboxGroup';
import RadiobuttonGroup from '../../molecules/RadiobuttonGroup/RadiobuttonGroup';
import TextfirldGroup from '../../molecules/TextfieldGroup/TextfieldGroup';
import BasicbuttonGroup from '../../molecules/BasicbuttonGroup/BasicbuttonGroup';
import SearchFormTitle from '../../molecules/SearchFormTitle/SearchFormTitle';
import './SearchFomr.css';

const SearchForm = () => {
    return(
        <form className='form'>
            <SearchFormTitle />
            <CheckboxGroup />
            <RadiobuttonGroup />
            <TextfirldGroup />
            <div className='formBtn'>
                <div className='btnGroup'>
                    <BasicbuttonGroup />
                </div>
            </div>
        </form>
    )
}

export default SearchForm;