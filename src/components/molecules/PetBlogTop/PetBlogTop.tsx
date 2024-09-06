import './PetBlogTop.css';
import PetFontText from "../../atm/PetFontText/PetFontText";
import PetButton from "../../atm/PetButton/PetButton";

const PetBlogTop = () => {
    return(
        <div className="petBlogTop">
            <div className='petBlogTopText'>
                <PetFontText size={"55px"} color={"#41403E"} text={"Latest blog posts"} />
            </div>
            <div className='petBlogTopBtn'>
                <PetButton height={"74px"} width={"217px"} text={"READ ALL →"} borderColor={"#41403E"} />
            </div>
        </div>
    );
};

export default PetBlogTop;