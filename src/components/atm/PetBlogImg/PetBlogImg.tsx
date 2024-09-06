import './PetBlogImg.css';

type Props = {
    img: string;
    height: string;
    width: string;
    date: string;
    month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec";
}

const PetBlogImg = (props: Props) => {

    const img = props.img;
    const h = props.height;
    const w = props.width;
    const d = props.date;
    const m = props.month;

    return(
        <div className='petBlogImg'>
            <img className='blogImg' src={img} style={{height: h, width: w}} />
            <div className="dateIcon">
                <div className="date">{d}</div>
                <div className="month">{m}</div>
            </div>
        </div>
    );
};

export default PetBlogImg;