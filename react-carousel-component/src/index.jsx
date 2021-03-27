import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  '../images/025.png',
  '../images/001.png',
  '../images/004.png',
  '../images/007.png',
  '../images/039.png'
];
ReactDOM.render(<Carousel images={images} />, document.querySelector('#root'));
