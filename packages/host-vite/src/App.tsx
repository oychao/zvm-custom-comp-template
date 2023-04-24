import './App.css';
import { CustomComponentAdapter } from './CustomComponentAdapter';

function App() {
  return (
    <div className='App'>
      <CustomComponentAdapter url={'http://localhost:8080/bundle.js'} />
    </div>
  );
}

export default App;
