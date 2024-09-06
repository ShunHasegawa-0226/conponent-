import DetailPage from '../components/templates/DetailPage/DetailPage';
import DetailContent from '../components/organisms/DetailContent/DetailContent';

const TanakaDetail = () => {
    return(
        <>
        <DetailPage />
        <DetailContent id={4} name={"田中優子"} age={25} />
        </>
    );
};

export default TanakaDetail;