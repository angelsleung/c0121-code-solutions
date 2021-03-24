import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>{props.text}</button>;
}

const clickMeButton = <CustomButton text='Click Me!' />;
ReactDOM.render(clickMeButton, document.querySelector('#root'));
