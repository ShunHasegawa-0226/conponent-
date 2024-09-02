import DetailContent from '../../organisms/DetailContent/DetailContent';
import HeaderGroup from '../../organisms/HeaderGroup/HeaderGroup';

const SatoDetailPage = () => {
    return(
        <>
            <HeaderGroup subTitle={"詳細ページ"} />
            <DetailContent id={2} name={"佐藤花子"} age={19} />
        </>
    );
};

export default SatoDetailPage;