import Image from './img/Exo2.png';
import './css/pageTest.css';

function Home({ goToTest, goToTest2 }) {
    return (
        <div>
            <button onClick={goToTest}>Aller à TestPage</button>
            <button onClick={goToTest2}>Aller à TestPage2</button>

            <div>
                <h1 className='title'>CECI EST UN TEST</h1>
                <img src={Image}></img>
                <form>
                    <input name="email" />
                    <input name="password" value="password" />
                    <button type="submit">validate</button>
                </form>
            </div>

        </div>
    );
}


export default Home;
