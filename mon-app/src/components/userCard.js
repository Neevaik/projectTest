import '../css/pageTest.css';

function CardTest({ name, age, avatar}) {

    return (
        <div >
            <p>{avatar}</p>
            <p>{name}</p>
            <p>{age}</p>
            <h2>---------------</h2>
        </div>
    )
}

export default CardTest;