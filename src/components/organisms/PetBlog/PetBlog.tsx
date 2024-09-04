import './PetBlog.css';
import PetBlogTop from "../../molecules/PetBlogTop/PetBlogTop";
import PetBlogContent from '../../molecules/PetBlogContent/PetBlogContent';


const PetBlog = () => {
    return(
        <div className="petBlog">
            <PetBlogTop />
            <PetBlogContent />
        </div>
    );
};

export default PetBlog;