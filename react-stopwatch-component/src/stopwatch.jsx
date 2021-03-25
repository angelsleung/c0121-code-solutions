import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTicking: false };
    this.seconds = 0;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isTicking: !this.state.isTicking });
    if (this.state.isTicking) {
      this.timerID = setInterval(() => this.tick(), 1000);
    } else {
      this.reset();
    }
  }

  tick() {
    this.seconds++;
  }

  reset() {
    clearInterval(this.timerID);
    // this.seconds = 0;
  }

  render() {
    return (
      <div className='stopwatch'>
        <div className='clock'>
          <div className='time'>{this.seconds}</div>
        </div>
        <i onClick={this.handleClick} className='icon fas fa-play'></i>
      </div>
    );
  }
}

export default Stopwatch;
