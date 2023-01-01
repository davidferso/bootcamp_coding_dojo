import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"} />
          <PersonCard lastName={"John"} firstName={"Smith"} age={88} hairColor={"Brown"} />
        </div>
      </header>
    </div>
  );
}

export default App;
