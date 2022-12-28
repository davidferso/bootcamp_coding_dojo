import './App.css';
import ThingsToDo from './Components/things-to-do';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Dojo!</h1>
        <p>Things I need to:</p>
        <ThingsToDo/>
      </header>
    </div>
  );
}

export default App;