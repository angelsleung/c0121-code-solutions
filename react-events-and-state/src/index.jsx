import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ isClicked: true });
  }

  render() {
    if (!this.state.isClicked) {
      return <button onClick={this.handleClick}>{'Click Me!'}</button>;
    }
    return <button>{'Thanks!'}</button>;
  }
}

const element = <CustomButton />;

ReactDOM.render(
  element,
  document.querySelector('#root')
);
