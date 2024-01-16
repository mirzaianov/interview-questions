import ArrayToString from './components/reactQuestions/ArrayToString';
import ArrayToTree1 from './components/reactQuestions/ArrayToTree1';
import ArrayToTree2 from './components/reactQuestions/ArrayToTree2';
import DomDepth from './components/reactQuestions/DomDepth';
import FetchData from './components/reactQuestions/FetchData';
import IncrementDecrement from './components/reactQuestions/IncrementDecrement';
import CarData from './components/reactQuestions/CarData';
import RandomColor from './components/reactQuestions/RandomColor';
import CardsBlock from './components/reactQuestions/CardsBlock';

import './App.scss';

export default function App() {
  return (
    <div className="App">
      <h1>Tasks:</h1>
      <ArrayToString />
      <ArrayToTree1 />
      <ArrayToTree2 />
      <FetchData />
      <IncrementDecrement />
      <DomDepth />
      <CarData />
      <RandomColor />
      <CardsBlock />
    </div>
  );
}
