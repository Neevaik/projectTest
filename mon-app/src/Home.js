import './css/pageTest.css';
import Navbar from './components/Navbar';

function Home({ goToTest, goToTest2 }) {

    return (
        <>
            <Navbar title={"homepage"} goToHome={() => { }} goToTest={goToTest} goToTest2={goToTest2} />
        </>
    );
}

export default Home;
