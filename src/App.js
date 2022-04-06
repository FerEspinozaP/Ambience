import {} from react;
import AudioList from './components/AudioList/index.js';
import Header from './components/Header/index.js';
import SearchInput from './components/SearchInput/index.js';
import Tabs from './components/Tabs/index.js';
import './App.css';


function App() {

  const [List, setList] = useState(false);

  const onBackButtonPress = () => {
    setList(false);
  }

  return (
    <div className="App m-16">
      <Header />
      <h2 className='mtb-16 .app-quote'>Home</h2>
      <SearchInput />
      <Tabs />
      {list && <AudioList onBackButtonPress={onBackButtonPress} />}
      <button onClick={() => setList(true)}>btn</button>
    </div>
  );
}

export default App;