import './PetBlogContent.css';
import PetBlogImg from "../../atm/PetBlogImg/PetBlogImg";
import PetFontText from '../../atm/PetFontText/PetFontText';
import PetTabBtn from '../../atm/PetTabBtn/PetTabBtn';

const PetBlogContent = () => {
    return(
        <div className="petBlogContents">
            <div className="petBlogContent">
                <PetBlogImg img={"../../../../images/Blog_1.png"} height={"367px"} width={"420px"} date={"22"} month={"Feb"} />
                <div className='petBlogText'>
                    <PetFontText
                    text={"10 Reasons to be helpful towards any animals"}
                    size={"26px"} color={"#41403E"} />
                    <PetFontText
                    text={"At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future."}
                    size={"16px"} color={"#908F8D"} />
                    <PetTabBtn text={"READ MORE"} fontColor={"#908F8D"} font={"'Courier New', Courier, monospace"} borderColor={"#D9D9D8"} />
                </div>
            </div>
            <div className="petBlogContent">
                <PetBlogImg img={"../../../../images/Blog_2.png"} height={"452px"} width={"420px"} date={"21"} month={"Feb"} />
                
                <div className='petBlogText'>
                    <PetFontText
                    text={"How to know your pet is hungry"}
                    size={"26px"} color={"#41403E"} />
                    <PetFontText
                    text={"At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future."}
                    size={"16px"} color={"#908F8D"} />
                    <PetTabBtn text={"READ MORE"} fontColor={"#908F8D"} font={"'Courier New', Courier, monospace"} borderColor={"#D9D9D8"} />
                </div>

            </div>
            <div className="petBlogContent">
                <PetBlogImg img={"../../../../images/Blog_3.png"} height={"291px"} width={"420px"} date={"20"} month={"Feb"} />

                <div className='petBlogText'>
                    <PetFontText
                    text={"Best home for your pets"}
                    size={"26px"} color={"#41403E"} />
                    <PetFontText
                    text={"At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future."}
                    size={"16px"} color={"#908F8D"} />
                    <PetTabBtn text={"READ MORE"} fontColor={"#908F8D"} font={"'Courier New', Courier, monospace"} borderColor={"#D9D9D8"} />
                </div>

            </div>
        </div>
    );
};

export default PetBlogContent;