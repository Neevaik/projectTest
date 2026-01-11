import Image from '../img/GigaTchad.jpeg';
import '../css/pageTest.css';

function Card({title, description}) {
    
    return (
        <div className='card'>
            <img className='picture' src={Image} />
            <h2 className='title'>{title}</h2>
            <p className='description'>{description}</p>
        </div>
    )
}

export default Card;