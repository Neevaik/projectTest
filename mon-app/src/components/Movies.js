import '../css/pageTest.css';

function Movies({ id, title, year }) {

    return (
        <div >
            <p>{id}</p>
            <p>{title}</p>
            <p>{year}</p>
            <h2>---------------</h2>
        </div>
    )
}

export default CardTest;