import './PetTestimonialText.css';
import PetFontText from "../../atm/PetFontText/PetFontText";
import PetTestimonialSlider from '../PetTestimonialSlider/PetTestimonialSlider';

const PetTestimonialText = () => {
    return(
        <div className="petTestimonialText">
            <PetFontText
            text={"At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future."}
            size={"36px"} color={"#908F8D"} /><br />
            <PetFontText text={"- Joshima Lin"} size={"15px"} color={"#41403E"} />
            <PetTestimonialSlider />
        </div>
    );
};

export default PetTestimonialText;