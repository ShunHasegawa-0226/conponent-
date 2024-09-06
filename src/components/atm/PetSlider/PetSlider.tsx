import './PetSlider.css';

type Props = {
    color: string;
};

const PetSlider = (props: Props) => {
    return(
        <input className="petSlider" type="button" style={{ backgroundColor: props.color }} />
    );
};

export default PetSlider;