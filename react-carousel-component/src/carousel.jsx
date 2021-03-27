import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayIndex: 0 };
    this.stepRight = this.stepRight.bind(this);
    this.stepLeft = this.stepLeft.bind(this);
  }

  stepRight() {
    if (this.state.displayIndex === this.props.images.length - 1) {
      this.setState({ displayIndex: 0 });
    } else {
      this.setState({ displayIndex: this.state.displayIndex + 1 });
    }
  }

  stepLeft() {
    if (this.state.displayIndex === 0) {
      this.setState({ displayIndex: this.props.images.length - 1 });
    } else {
      this.setState({ displayIndex: this.state.displayIndex - 1 });
    }
  }

  render() {
    return (
    <div className='carousel'>
      <i className="arrow fas fa-chevron-left" onClick={this.stepLeft}></i>
      <div className='image-dots'>
        <img className='image' src={this.props.images[this.state.displayIndex]} alt='pikachu'></img>
        <div className='dots'>
          <i className="dot fas fa-circle"></i>
          <i className="dot far fa-circle"></i>
          <i className="dot far fa-circle"></i>
          <i className="dot far fa-circle"></i>
          <i className="dot far fa-circle"></i>
        </div>
      </div>
      <i className="arrow fas fa-chevron-right" onClick={this.stepRight}></i>
    </div>
    );
  }
}

export default Carousel;
