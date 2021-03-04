import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="app">Redux</div>
    </Provider>
  );
}

export default App;
