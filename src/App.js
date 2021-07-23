import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './style.css';

import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import Fruits from './hooks/Fruits';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>React-Redux without Hooks</h1>
        <CakeContainer />
        <IceCreamContainer />
        <Fruits />
      </div>
    </Provider>
  );
}
