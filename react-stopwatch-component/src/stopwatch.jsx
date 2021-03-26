import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTicking: false,
      seconds: 0
    };
    this.handleClickIcon = this.handleClickIcon.bind(this);
    this.handleClickClock = this.handleClickClock.bind(this);
  }

  handleClickIcon() {
    if (this.state.isTicking) {
      clearInterval(this.timerID);
    } else {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
    this.setState({ isTicking: !this.state.isTicking });
  }

  handleClickClock() {
    if (!this.state.isTicking) {
      clearInterval(this.timerID);
      this.setState({ seconds: 0 });
    }
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  render() {
    const icon = this.state.isTicking ? 'pause' : 'play';
    const clockClass = this.state.isTicking || this.state.seconds === 0
      ? ''
      : 'click';
    return (
      <div className='stopwatch'>
        <div onClick={this.handleClickClock} className={`clock ${clockClass}`}>
          <div className='time'>{this.state.seconds}</div>
        </div>
        <i onClick={this.handleClickIcon} className={`icon fas fa-${icon}`}></i>
      </div>
    );
  }
}

export default Stopwatch;
