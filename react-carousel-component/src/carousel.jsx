import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: 'pikachu' };
  }

  render() {
    return (
    <div className='carousel'>
      <i className="arrow fas fa-chevron-left"></i>
      <div className='image-dots'>
        <img className='image' src='../images/025.png' alt='pikachu'></img>
        <div className='dots'>
          <i className="dot fas fa-circle"></i>
          <i className="dot far fa-circle"></i>
          <i className="dot far fa-circle"></i>
          <i className="dot far fa-circle"></i>
          <i className="dot far fa-circle"></i>
        </div>
      </div>
      <i className="arrow fas fa-chevron-right"></i>
    </div>
    );
  }
}

export default Carousel;
