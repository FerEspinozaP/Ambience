import {} from react;
import AudioList from './components/AudioList';
import './App.css';

function App() {

  const [List, setList] = useState(false);

  const onBackButtonPress = () => {
    setList(false);
  }

  return (
    <div className="App m-16">

      {list && <AudioList onBackButtonPress={onBackButtonPress} />}
      <button onClick={() => setList(true)}>btn</button> 
    </div>
  );
}

export default App;
