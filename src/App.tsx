import { Count } from './components/Count';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: '60px', width: '60px' }}>
        <Count globalData={{}} />
      </div>
    </BrowserRouter>
  );
}

export default App;
