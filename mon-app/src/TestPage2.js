import SpiderMan from './img/Spider-man.jpg';
import Hulk from './img/Hulk.jpg';
import CaptainAmerica from './img/Captain America.jpg';
import Thor from './img/Thor.jpg';
import './css/pageTest2.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function TestPage2({ goToExercice, goToHome, goToTest }) {

    const movies = [
        {
            image: SpiderMan,
            title: "Spiderman",
            description: "Orphelin, Peter Parker est élevé par sa tante May et son oncle Ben dans le quartier Queens de New York. Tout en poursuivant ses études à l'université, il trouve un emploi de photographe au journal Daily Bugle. Il partage son appartement avec Harry Osborn, son meilleur ami, et rêve de séduire la belle Mary Jane.",
            style: "blue"
        },
        {
            image: Hulk,
            title: "Spiderman",
            description: "Orphelin, Peter Parker est élevé par sa tante May et son oncle Ben dans le quartier Queens de New York. Tout en poursuivant ses études à l'université, il trouve un emploi de photographe au journal Daily Bugle. Il partage son appartement avec Harry Osborn, son meilleur ami, et rêve de séduire la belle Mary Jane.",
            style: "blue"
        },
        {
            image: CaptainAmerica,
            title: "Spiderman",
            description: "Orphelin, Peter Parker est élevé par sa tante May et son oncle Ben dans le quartier Queens de New York. Tout en poursuivant ses études à l'université, il trouve un emploi de photographe au journal Daily Bugle. Il partage son appartement avec Harry Osborn, son meilleur ami, et rêve de séduire la belle Mary Jane.",
            style: "blue"
        },
        {
            image: Thor,
            title: "Spiderman",
            description: "Orphelin, Peter Parker est élevé par sa tante May et son oncle Ben dans le quartier Queens de New York. Tout en poursuivant ses études à l'université, il trouve un emploi de photographe au journal Daily Bugle. Il partage son appartement avec Harry Osborn, son meilleur ami, et rêve de séduire la belle Mary Jane.",
            style: "blue"
        }
    ]

    return (
        <div>
            <div className="layout">
                <Navbar title="Page test 2" goToExercice={goToExercice} goToHome={goToHome} goToTest={goToTest} goToTest2={() => { }} />
                <div className="rightColumn">
                    <div className="content">
                        <h1 className="title">Films</h1>
                        <div className="loginForm">
                            {movies.map((movie, index) => (
                                <Card
                                    key={index}
                                    image={movie.image}
                                    title={movie.title}
                                    description={movie.description}
                                    style={movie.style}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default TestPage2;

// Test pour combler : https://www.lipsum.com/