// import pinterest from "../assets/image010.jpg"

const ImagePractice = () => {
    const img = require('../assets/image010.jpg');

    return (
        <div>
            <img src={img} alt="PINTEREST"/>
        </div>
    )
}

export default ImagePractice;