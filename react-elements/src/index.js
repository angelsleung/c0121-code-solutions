import React from 'react';
import ReactDOM from 'react-dom';

const reactElement = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

const $root = document.querySelector('#root');

ReactDOM.render(reactElement, $root);
