import './PetIconFacebock.css';

type Props = {
    backColor: string;
    fontColor: string;
}

const PetIconFacebock = (props: Props) => {
    return(
        <div className="facebockParent" style={{backgroundColor: props.backColor}}>
            <div className="facebock" style={{color: props.fontColor}}>f</div>
        </div>
    );
};

export default PetIconFacebock;