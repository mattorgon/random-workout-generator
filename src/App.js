import './App.css';
import MainScreen from "./screens/MainScreen"
import { DarkModeProvider } from './context/DarkModeProvider'

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <MainScreen/>
      </DarkModeProvider>
    </div>
  );
}

export default App;
