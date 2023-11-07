import ArrayToString from './components/jsQuestions/ArrayToString';

import ArrayToTree1 from './components/reactQuestions/ArrayToTree1';
import ArrayToTree2 from './components/reactQuestions/ArrayToTree2';

import './App.scss';

export default function App() {
  return (
    <div className="App">
      <h1>Tasks:</h1>
      <ArrayToString />
      <ArrayToTree1 />
      <ArrayToTree2 />
    </div>
  );
}
