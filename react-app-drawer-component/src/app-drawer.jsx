import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClickIcon = this.handleClickIcon.bind(this);
    this.handleClickLink = this.handleClickLink.bind(this);
  }

  handleClickIcon() {
    this.setState({ isOpen: true });
  }

  handleClickLink() {
    this.setState({ isOpen: false });
  }

  render() {
    const menuClass = this.state.isOpen ? '' : 'hidden';
    const iconClass = this.state.isOpen ? 'hidden' : '';
    return (
      <div className='app-drawer'>
        <i onClick={this.handleClickIcon} className={`icon fas fa-bars ${iconClass}`}></i>
        <div className={`menu ${menuClass}`}>
          <h1>Menu</h1>
          <a href='#' onClick={this.handleClickLink}><h2>About</h2></a>
          <a href='#' onClick={this.handleClickLink}><h2>Get Started</h2></a>
          <a href='#' onClick={this.handleClickLink}><h2>Sign In</h2></a>
        </div>
        <div className={`shade ${menuClass}`}></div>
      </div>
    );
  }
}

export default AppDrawer;
