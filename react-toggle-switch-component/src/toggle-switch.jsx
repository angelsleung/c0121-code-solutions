import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    const status = this.state.isOn ? 'on' : 'off';
    return (
      <div className='button' onClick={this.handleClick}>
        <div className={`switch ${status}`}>
          <div className={`toggle ${status}`}></div>
        </div>
        <div className='label'>{status.toUpperCase()}</div>
      </div>
    );
  }
}

export default ToggleSwitch;
