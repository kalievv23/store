import './App.css';
import Index from './components/route/Index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/store/store';
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Index/>
          <div id='modal-root'></div>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))

export default App;
