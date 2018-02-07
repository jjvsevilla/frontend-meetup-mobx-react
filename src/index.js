import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import App from './components/App';
import './styles.css';
import ProfilesStore from './stores/ProfilesStore';

const stores = {
  ProfilesStore
};

window.store = stores;

useStrict(true);

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>
, document.getElementById('root'));
