import './App.css';
import Header from './components/Header/index.js';
import SearchInput from './components/SearchInput/index.js';
import Tabs from './components/Tabs';


function App() {
  return (
    <div className="App m-16">
      <Header />
      <h2 className='mtb-16 .app-quote'>Home</h2>
      <SearchInput />
      <Tabs />
    </div>
  );
}

export default App;