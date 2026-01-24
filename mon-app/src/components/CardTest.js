import '../css/pageTest.css';
import exercices from "../TestPage2";

function CardTest({ title, description, difficulty }) {
    return (
        <div className='card' style={{ backgroundColor: 'blue' }}>
            <h2 className='title'>{title}</h2>
            <p className='description'>{description}</p>
            <p className='difficulty'>{difficulty}</p>


                <ul className="exercice-list">
                    {exercices.map(ex => (
                        <li key={ex.id} className="exercice-item">
                            <h3>{ex.title}</h3>
                            <p>{ex.description}</p>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default CardTest;