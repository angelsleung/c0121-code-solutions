import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayIndex: 0 };
    this.stepRight = this.stepRight.bind(this);
    this.clickRight = this.clickRight.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.clickDot = this.clickDot.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(this.stepRight, 3000);
  }

  stepRight() {
    const nextIndex = this.state.displayIndex === this.props.images.length - 1
      ? 0
      : this.state.displayIndex + 1;
    this.setState({ displayIndex: nextIndex });
  }

  clickRight() {
    this.stepRight();
    this.resetAutoStep();
  }

  clickLeft() {
    const nextIndex = this.state.displayIndex === 0
      ? this.props.images.length - 1
      : this.state.displayIndex - 1;
    this.setState({ displayIndex: nextIndex });
    this.resetAutoStep();
  }

  clickDot(event) {
    const index = event.target.getAttribute('index');
    this.setState({ displayIndex: parseInt(index, 10) });
    this.resetAutoStep();
  }

  resetAutoStep() {
    clearInterval(this.timerID);
    this.timerID = setInterval(this.stepRight, 3000);
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
      <i className="arrow fas fa-chevron-left" onClick={this.clickLeft}></i>
      <div className='image-dots'>
        <img className='image' src={imageURL}
          alt={`Pokemon #${pokemonNumber}`}></img>
        <div className='dots'>
          {this.renderDots()}
        </div>
      </div>
      <i className="arrow fas fa-chevron-right" onClick={this.clickRight}></i>
    </div>
    );
  }
}

export default Carousel;
