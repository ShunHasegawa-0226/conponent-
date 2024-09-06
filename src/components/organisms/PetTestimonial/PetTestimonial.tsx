import './PetTestimonial.css';
import PetQuotation from "../../molecules/PetQuotation/PetQuotation";
import PetTestimonialSlider from "../../molecules/PetTestimonialSlider/PetTestimonialSlider";
import PetTestimonialText from "../../molecules/PetTestimonialText/PetTestimonialText";


const PetTestimonial = () => {
    return(
        <div className="petTestimonial">
            <PetQuotation />
            <PetTestimonialText />
        </div>
    );
};

export default PetTestimonial;