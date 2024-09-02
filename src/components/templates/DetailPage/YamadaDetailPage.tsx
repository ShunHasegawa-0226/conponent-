import DetailContent from '../../organisms/DetailContent/DetailContent';
import HeaderGroup from '../../organisms/HeaderGroup/HeaderGroup';

const YamadaDetailPage = () => {
    return(
        <>
            <HeaderGroup subTitle={"詳細ページ"} />
            <DetailContent id={1} name={"山田太郎"} age={20} />
        </>
    );
};

export default YamadaDetailPage;