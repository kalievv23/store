import './App.css';
import Index from './components/route/Index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/store/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Index/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
