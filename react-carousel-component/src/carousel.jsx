import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayIndex: 0 };
    this.stepRight = this.stepRight.bind(this);
    this.stepLeft = this.stepLeft.bind(this);
    this.clickDot = this.clickDot.bind(this);
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

  clickDot(event) {
    const index = event.target.getAttribute('index');
    this.setState({ displayIndex: parseInt(index, 10) });
  }

  renderDots() {
    return (
      this.props.images.map((value, index) => {
        const dotClass = index === this.state.displayIndex ? 's' : 'r';
        return <i key={index} className={`dot fa${dotClass} fa-circle`}
          onClick={this.clickDot} index={index}></i>;
      })
    );
  }

  render() {
    const imageURL = this.props.images[this.state.displayIndex];
    const pokemonNumber = imageURL.slice(10, 13);
    return (
    <div className='carousel'>
      <i className="arrow fas fa-chevron-left" onClick={this.stepLeft}></i>
      <div className='image-dots'>
        <img className='image' src={imageURL}
          alt={`Pokemon #${pokemonNumber}`}></img>
        <div className='dots'>
          {this.renderDots()}
        </div>
      </div>
      <i className="arrow fas fa-chevron-right" onClick={this.stepRight}></i>
    </div>
    );
  }
}

export default Carousel;
