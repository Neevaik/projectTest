import './css/pageTest.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function Home({ goToTest, goToTest2 }) {

    
    return (
        <div>
            <Navbar goToHome={goToTest}/>
            {/* <button onClick={goToTest}>Aller à TestPage</button> */}
            <button onClick={goToTest2}>Aller à TestPage2</button>

            <div className='background'>
                <Card title={"Insterllar"} description={1} />
            </div>

        </div>
    );
}

export default Home;
