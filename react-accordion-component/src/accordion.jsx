import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  Topic(prop) {
    const contentClass = this.state.isOpen ? '' : 'hidden';
    return (
      <>
        <div className='topic' onClick={this.handleClick}>{prop.topic}</div>
        <div className={`content ${contentClass}`}>{prop.content}</div>
      </>
    );
  }

  render() {
    return (
      this.props.map(prop => {
        <Topic key={this.props.key}/>
      }
    );
  }
}
export default Accordion;
