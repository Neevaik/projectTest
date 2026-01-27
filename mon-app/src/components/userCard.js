import '../css/pageTest.css';

function userCard({ name, age, avatar, isOnline }) {

    return (
        <div >
            <img src={avatar} />
            <p>{name}</p>
            <p>{age}</p>
            <p>{isOnline}</p>
        </div>
    )
}

export default userCard;