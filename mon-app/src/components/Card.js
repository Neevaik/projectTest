import Image from '../img/GigaTchad.jpeg';
import SpiderMan from '../img/Spider-man.jpg';
import Hulk from '../img/Hulk.jpg';
import CaptainAmerica from '../img/Captain America.jpg';
import Thor from '../img/Thor.jpg';
import IronMan from '../img/Iron Man.jpg'
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