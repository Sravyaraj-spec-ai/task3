import './App.css';
import ColorPicker from './components3/task3';
import './components3/task3.css';
function App() {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  return (
    <div className="App" >
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>

  );
}

export default App;