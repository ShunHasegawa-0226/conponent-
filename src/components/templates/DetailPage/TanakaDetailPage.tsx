import DetailContent from '../../organisms/DetailContent/DetailContent';
import HeaderGroup from '../../organisms/HeaderGroup/HeaderGroup';

const TanakaDetailPage = () => {
    return(
        <>
            <HeaderGroup subTitle={"詳細ページ"} />
            <DetailContent id={4} name={"田中優子"} age={25} />
        </>
    );
};

export default TanakaDetailPage;