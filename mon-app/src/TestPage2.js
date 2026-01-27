import './css/pageTest2.css';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import { users } from '../src/data';

function TestPage2({ goToExercice, goToHome, goToTest }) {

  
  return (
    <div>
      <div >
        <Navbar title="Page test 2" goToExercice={goToExercice} goToHome={goToHome} goToTest={goToTest} goToTest2={() => { }} />
      </div>
      <div>
        {users.map(x =>
          x.isOnline ? (<UserCard name={x.name} age={x.age} avatar={x.avatar} isOnline={x.isOnline} />) : null
        )}
      </div>

<div>
  <p>----------------------------------------------</p>
</div>

      <div>
         {users.map(x =>
          !x.isOnline ? (<UserCard name={x.name} age={x.age} avatar={x.avatar} isOnline={x.isOnline} />) : null
        )}
      </div>

    </div>
  );
}

export default TestPage2;