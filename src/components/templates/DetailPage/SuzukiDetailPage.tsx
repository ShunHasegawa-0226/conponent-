import DetailContent from '../../organisms/DetailContent/DetailContent';
import HeaderGroup from '../../organisms/HeaderGroup/HeaderGroup';

const SuzukiDetailPage = () => {
    return(
        <>
            <HeaderGroup subTitle={"詳細ページ"} />
            <DetailContent id={3} name={"鈴木二郎"} age={23} />
        </>
    );
};

export default SuzukiDetailPage;