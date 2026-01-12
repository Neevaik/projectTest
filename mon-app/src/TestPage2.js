import SpiderMan from './img/Spider-man.jpg';
import Hulk from './img/Hulk.jpg';
import CaptainAmerica from './img/Captain America.jpg';
import Thor from './img/Thor.jpg';
import IronMan from './img/Iron Man.jpg';
import Button from './components/Buttons';
import './css/pageTest2.css';
import Card from './components/Card';

function TestPage2({ goToHome }) {

    return (
        <div>
            
        <Button/>
            <div className="layout">
                <div className="navbar">
                    <h1 className="navTitle">Titre</h1>
                    <div className="navRight">
                    <div className="navItem">Home</div>
                    <button onClick={goToHome}>Retour à Home</button>
                    <button className="navButton" onClick={goToHome}>T2</button>
                    </div>
                </div>
                <div className="rightColumn">
                    <div className="content">
                        <h1 className="title">Films</h1>
                        <div className="loginForm">
                            <Card image={SpiderMan} title={"Spider-man"} description={"Orphelin, Peter Parker est élevé par sa tante May et son oncle Ben dans le quartier Queens de New York. Tout en poursuivant ses études à l'université, il trouve un emploi de photographe au journal Daily Bugle. Il partage son appartement avec Harry Osborn, son meilleur ami, et rêve de séduire la belle Mary Jane."} />
                            <Card image={Thor} title={"Thor"} description={"Le roi Odin règne avec sagesse sur son royaume. Une entente maintient la paix avec les Géants du monde glacé de Jotunheim. Les gestes irréfléchis du jeune Thor, pressenti pour prendre la place de son père sur le trône, mettent cependant en péril la paix fragile entre les deux peuples, ce qui pousse son père à le bannir sur Terre."} />
                            <Card image={CaptainAmerica} title={"Captain America"} description={"1941. La Seconde Guerre mondiale fait rage. Après avoir tenté vainement de s'engager dans l'armée pour se battre aux côtés des Alliés, Steve Rogers, frêle et timide, se porte volontaire pour participer à un programme expérimental qui va le transformer en un super soldat connu sous le nom de Captain America."} />
                            <Card image={Hulk} title={"Hulk"} description={"Bruce Banner est un scientifique brillant, transformé accidentellement en Hulk suite à une exposition aux rayons gamma. Sous sa forme monstrueuse, Hulk libère une force incontrôlable alimentée par la colère."} />
                            <Card image={IronMan} title={"Iron Man"} description={"Alors qu'il fait l'essai d'une arme de son invention en Afghanistan, le milliardaire Tony Stark est capturé par des insurgés qui le forcent à travailler pour eux. Mais à leur insu, le scientifique crée pour lui-même une armure superpuissante au moyen de laquelle il s'évade et rentre aux États-Unis."} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default TestPage2;

// Test pour combler : https://www.lipsum.com/