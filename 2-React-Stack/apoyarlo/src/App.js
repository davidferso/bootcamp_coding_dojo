import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <PersonCard lastName = {"Doe"} firstName = {"Jane"} age = {45} hairColor = {"Black"}/>
          <PersonCard lastName = {"John"} firstName = {"Smith"} age = {88} hairColor = {"Brown"}/>
          <PersonCard lastName = {"Millard"} firstName = {"Fillmore"} age = {50} hairColor = {"Brown"}/>
          <PersonCard lastName = {"Maria"} firstName = {"Smith"} age = {62} hairColor = {"Brown"}/>
        </div>
      </header>
    </div>
  );
}

export default App;
