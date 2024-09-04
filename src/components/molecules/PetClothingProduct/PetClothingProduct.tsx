import './PetClothingProduct.css';
import PetProductImg from "../../atm/PetProductImg/PetProductImg";
import PetProductText from "../../atm/PetProductText/PetProductText";

const PetClothingProduct = () => {
    return(
        <div className="productsClothing">
            <div className='product'>
                <PetProductImg pop={"New"} img={"../../../../images/GreyHoodie.png"} imgHeight={"269px"} imgWidth={"239px"} imgTop={"27px"} imgLeft={"36px"} />
                <PetProductText name={"Grey Hoodie"} />
            </div>
            <div className='productClothing'>
                <PetProductImg img={"../../../../images/HappyJeansPant.png"} imgHeight={"243px"} imgWidth={"219px"} imgTop={"29px"} imgLeft={"44px"} />
                <PetProductText name={"Happy Jeans Pant"} />
            </div>
            <div className='productClothing'>
                <PetProductImg pop={"New"} img={"../../../../images/TightHalfTShirt.png"} imgHeight={"269px"} imgWidth={"265px"} imgTop={"27px"} imgLeft={"20px"} />
                <PetProductText name={"Tight Half T-Shirt"} />
            </div>
            <div className='productClothing'>
                <PetProductImg img={"../../../../images/BlackThickJacket.png"} imgHeight={"242px"} imgWidth={"269px"} imgTop={"22px"} imgLeft={"32px"} />
                <PetProductText name={"Black Thick Jacket"} />
            </div>
        </div>
    );
};

export default PetClothingProduct;