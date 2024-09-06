import DetailPage from '../components/templates/DetailPage/DetailPage';
import DetailContent from '../components/organisms/DetailContent/DetailContent';

const YamadaDetail = () => {
    return(
        <>
        <DetailPage />
        <DetailContent id={1} name={"山田太郎"} age={20} />
        </>
    );
};

export default YamadaDetail;