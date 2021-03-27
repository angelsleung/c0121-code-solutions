import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openTopic: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const clickedTopic = event.target.getAttribute('topic');
    if (clickedTopic === this.state.openTopic) {
      this.setState({ openTopic: null });
    } else {
      this.setState({ openTopic: clickedTopic });
    }
  }

  render() {
    const topics = this.props.data.map(topic => {
      const contentClass = topic.title === this.state.openTopic ? '' : 'hidden';
      return (
        <div key={topic.title} className='topic'>
          <div className='title' topic={topic.title} onClick={this.handleClick}>{topic.title}</div>
          <div className={`content ${contentClass}`}>{topic.content}</div>
        </div>
      );
    });
    return topics;
  }
}

export default Accordion;
