import '../css/pageTest.css';

function Card({ image, title, description, style }) {
    return (
        <div className='card' style={{ backgroundColor: style }}>
            <img className='picture' src={image} />
            <h2 className='title'>{title}</h2>
            <p className='description'>{description}</p>
        </div>
    )
}

export default Card;