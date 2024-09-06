import './PetClothing.css';
import PetclothingTop from "../../molecules/PetClothingTop/PetClothingTop";
import PetClothingProduct from '../../molecules/PetClothingProduct/PetClothingProduct';


const Petclothing = () => {
    return(
        <div className="petClothing">
            <PetclothingTop />
            <PetClothingProduct />
        </div>
    );
};

export default Petclothing;