import './PetSellingProduct.css';
import PetProductImg from "../../atm/PetProductImg/PetProductImg";
import PetProductText from "../../atm/PetProductText/PetProductText";

const PetSellingProduct = () => {
    return(
        <div className="productsSelling">
            <div className="productSelling">
                <PetProductImg img={"../../../../images/Selling_1.png"} imgHeight={"232px"} imgWidth={"198px"} imgTop={"22px"} imgLeft={"56px"} />
                <PetProductText name={"Grey Hoodie"} />
            </div>
            <div className="productSelling">
                <PetProductImg img={"../../../../images/Selling_2.png"} imgHeight={"209.81px"} imgWidth={"285.92px"} imgTop={"45px"} imgLeft={"21px"} />
                <PetProductText name={"Happy Jeans Pant"} />
            </div>
            <div className="productSelling">
                <PetProductImg pop={"Sale"} img={"../../../../images/Selling_3.png"} imgHeight={"221px"} imgWidth={"246px"} imgTop={"34px"} imgLeft={"34px"} />
                <PetProductText name={"Tight Half T-Shirt"} />
            </div>
            <div className="productSelling">
                <PetProductImg img={"../../../../images/Selling_4.png"} imgHeight={"240px"} imgWidth={"175px"} imgTop={"34px"} imgLeft={"66px"} />
                <PetProductText name={"Black Thick Jacket"} />
            </div>
        </div>
    );
};

export default PetSellingProduct;