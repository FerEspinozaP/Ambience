import './App.css';
import Header from './components/Header/index.js';
import SearchInput from './components/SearchInput/index.js';


function App() {
  return (
    <div className="App m-16">
      <Header />
      <h2 className='mtb-16 .app-quote'>Home</h2>
      <SearchInput />
    </div>
  );
}

export default App;