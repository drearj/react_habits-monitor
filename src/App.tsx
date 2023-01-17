import { Habit } from "./components/Habit";
import './styles/global.css';

function App() {

  return (
    <div>
      <Habit completed={3} />
      <Habit completed={5} />
      <Habit completed={8} />
    </div>
  );
}

export default App
