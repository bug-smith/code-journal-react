import './App.css'
import './css/layout.css';
import './css/styles.css';
import './css/reset.css';
import { Form } from './Form';
import { Header } from './Header';
import { ShowEntries } from './ShowEntries';
import { readEntries } from './data';

function App() {
const entries = readEntries();


  return (
    <div>
      <Header />
      <Form entries={entries}/>
      <ShowEntries entries={entries}/>
    </div>
  );
}

export default App
