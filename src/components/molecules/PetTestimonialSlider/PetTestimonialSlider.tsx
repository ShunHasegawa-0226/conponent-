import './PetTestimonialSlider.css';
import PetSlider from "../../atm/PetSlider/PetSlider";

const PetTestimonialSlider = () => {
    return(
        <div className="petTestimonialSlider">
            <PetSlider color={"#41403E"} />
            <PetSlider color={"transparent"} />
            <PetSlider color={"transparent"} />
        </div>
    );
};

export default PetTestimonialSlider;