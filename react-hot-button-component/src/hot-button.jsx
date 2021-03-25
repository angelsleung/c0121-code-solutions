import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numClicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ numClicks: this.state.numClicks + 1 });
  }

  render() {
    const numClicks = this.state.numClicks;
    let color = 'button ';
    if (numClicks < 3) {
      color += 'gray';
    } else if (numClicks < 6) {
      color += 'blue';
    } else if (numClicks < 9) {
      color += 'purple';
    } else if (numClicks < 12) {
      color += 'red';
    } else if (numClicks < 15) {
      color += 'orange';
    } else if (numClicks < 18) {
      color += 'yellow';
    } else {
      color += 'white';
    }
    return (
      <button onClick={this.handleClick} className={color}>
        {'Hot Button'}
      </button>
    );
  }
}

export default HotButton;
