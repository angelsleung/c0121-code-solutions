import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  render() {
    return <button>{ this.props.text }</button>;
  }
}

const element = <CustomButton text='Click Me!' />;

ReactDOM.render(
  element,
  document.querySelector('#root')
);
