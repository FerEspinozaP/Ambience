import { useState } from "react";
import AudioList from './components/AudioList';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Tabs from './components/Tabs';
import './App.css';

function App() {

  const [list, setList] = useState(false);

  const onBackButtonPress = () => {
    setList(false);
  }

  return (
    <div className="App m-16">
      <Header />
      <h2 className='mtb-16 app-quote'>Home</h2>
      <SearchInput />
      <Tabs />
      {list && <AudioList onBackButtonPress={onBackButtonPress} /> }
      <button onClick={() => setList(true)}>btn</button>
    </div>
  );
}

export default App;