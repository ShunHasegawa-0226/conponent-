import DetailPage from '../components/templates/DetailPage/DetailPage';
import DetailContent from '../components/organisms/DetailContent/DetailContent';

const SuzukiDetail = () => {
    return(
        <>
        <DetailPage />
        <DetailContent id={3} name={"鈴木二郎"} age={23} />
        </>
    );
};

export default SuzukiDetail;