import './PetFoodiesProducr.css';
import PetProductImg from "../../atm/PetProductImg/PetProductImg";
import PetProductText from "../../atm/PetProductText/PetProductText";

const PetFoodiesProduct = () => {
    return(
        <>
        <div className="productsFoodies">
            <div className="productFoodies">
                <PetProductImg img={"../../../../images/Foodies_1.png"} imgHeight={"214px"} imgWidth={"151px"} imgTop={"42px"} imgLeft={"79px"} />
                <PetProductText name={"Happy Jeans Pant"} />
            </div>
            <div className="productFoodies">
                <PetProductImg pop={"New"} img={"../../../../images/Foodies_2.png"} imgHeight={"182px"} imgWidth={"219px"} imgTop={"48px"} imgLeft={"51px"} />
                <PetProductText name={"Happy Jeans Pant"} />
            </div>
            <div className="productFoodies">
                <PetProductImg img={"../../../../images/Foodies_3.png"} imgHeight={"225px"} imgWidth={"152px"} imgTop={"32px"} imgLeft={"81px"} />
                <PetProductText name={"Tight Half T-Shirt"} />
            </div>
            <div className="productFoodies">
                <PetProductImg pop={"Sold"} img={"../../../../images/Foodies_4.png"} imgHeight={"172px"} imgWidth={"241px"} imgTop={"53px"} imgLeft={"40px"} />
                <PetProductText name={"Black Thick Jacket"} />
            </div>
        </div>
        
        <div className="productsFoodies">
            <div className="productFoodies">
                <PetProductImg img={"../../../../images/Foodies_5.png"} imgHeight={"162px"} imgWidth={"228px"} imgTop={"59px"} imgLeft={"41px"} />
                <PetProductText name={"Grey Hoodie"} />
            </div>
            <div className="productFoodies">
                <PetProductImg img={"../../../../images/Foodies_6.png"} imgHeight={"185px"} imgWidth={"145px"} imgTop={"49px"} imgLeft={"82px"} />
                <PetProductText name={"Grey Hoodie"} />
            </div>
            <div className="productFoodies">
                <PetProductImg pop={"Sold"} img={"../../../../images/Foodies_7.png"} imgHeight={"195px"} imgWidth={"245px"} imgTop={"45px"} imgLeft={"36px"} />
                <PetProductText name={"Black Thick Jacket"} />
            </div>
            <div className="productFoodies">
                <PetProductImg img={"../../../../images/Foodies_8.png"} imgHeight={"249px"} imgWidth={"172px"} imgTop={"23px"} imgLeft={"66px"} />
                <PetProductText name={"Happy Jeans Pant"} />
            </div>
        </div>
        </>
    )
}

export default PetFoodiesProduct;