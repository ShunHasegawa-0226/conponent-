import PetHeader from "../../organisms/PetHeader/PetHeader";
import PetTop from "../../organisms/PetTop/PetTop";
import Petclothing from "../../organisms/PetClothing/PetClothing";
import PetFoodiesTop from "../../molecules/PetFoodiesTop/PetFoodiesTop";
import PetFoodiesProduct from "../../molecules/PetFoodiesProduct/PetFoodiesProduct";
import PetTopSmall from "../../organisms/PetTopSmall/PetTopSmall";
import PetTestimonial from "../../organisms/PetTestimonial/PetTestimonial";
import PetSelling from "../../organisms/PetSelling/PetSelling";
import PetBlog from "../../organisms/PetBlog/PetBlog";
import PetImgGroup from "../../organisms/PetImgGroup/PetImgGroup";
import PetFooter from "../../organisms/PetFooter/PetFooter";



const PetPage = () => {
    return(
        <div className="petContent">
            <PetHeader />
            <PetTop />
            <Petclothing />
            <PetFoodiesTop />
            <PetFoodiesProduct />
            <PetTopSmall />
            <PetTestimonial />
            <PetSelling />
            <PetBlog />
            <PetImgGroup />
            <PetFooter />
        </div>
    );
};

export default PetPage;