import './PetFoodies.css';
import PetFoodiesProduct from "../../molecules/PetFoodiesProduct/PetFoodiesProduct";
import PetFoodiesTop from "../../molecules/PetFoodiesTop/PetFoodiesTop";


const Petfoodies = () => {
    return(
        <div className="petFoodies">
            <PetFoodiesTop />
            <PetFoodiesProduct />
        </div>
    );
};

export default Petfoodies;