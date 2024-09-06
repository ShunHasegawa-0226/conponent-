

type Props = {
    size: "small" | "large";
};

const CircleImg = (props: Props) => {
    return(
        <img className={`circle${props.size}`} src="../../../../images/circle.png" />
    );
};

export default CircleImg;