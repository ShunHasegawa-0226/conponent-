import PetSellingProduct from '../../molecules/PetSellingProduct/PetSellingProduct';
import PetSellingTop from '../../molecules/PetSellingTop/PetSellingTop';
import './PetSelling.css';

const PetSelling = () => {
    return(
        <div className='petSelling'>
            <PetSellingTop />
            <PetSellingProduct />
        </div>
    );
};

export default PetSelling;