import './App.css';
import './assets/icons/font-awesome-4.7.0/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/redux_logic';

import Main from './components/MainComponent';

store.subscribe(()=>{
  console.log(store.getState());
  //localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})



function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
          <div>
            <Main />  
          </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
