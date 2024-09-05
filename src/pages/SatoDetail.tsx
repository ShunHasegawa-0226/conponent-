import DetailPage from '../components/templates/DetailPage/DetailPage';
import DetailContent from '../components/organisms/DetailContent/DetailContent';

const SatoDetail = () => {
    return(
        <>
        <DetailPage />
        <DetailContent id={2} name={"佐藤花子"} age={19} />
        </>
    );
};

export default SatoDetail;