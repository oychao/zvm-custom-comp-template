import { HeaderMenu } from './components/HeaderMenu';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: '60px', width: '60px' }}>
        <HeaderMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;
