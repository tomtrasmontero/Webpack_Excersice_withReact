import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeMessage from './components/WelcomeMessage';
import SCSS from './styles/main.scss';

const appData = {
  title: 'React Demo App',
};

ReactDOM.render(
  <WelcomeMessage data={appData} />, document.getElementById('container'),
);
