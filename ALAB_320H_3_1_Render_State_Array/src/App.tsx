import './App.css'
import { learnerData } from './learner_data/learner'
import Learner from './components/Learner';


const App: React.FC = () => {

  return (
    <div className='card'>
      {learnerData.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
  );
};

export default App
