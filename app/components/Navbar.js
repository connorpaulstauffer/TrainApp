import React from 'react';
import NavbarSignIn from './navbar/NavbarSignIn';
import NavbarSignUp from './navbar/NavbarSignUp';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar">
				<div className="navbar-container">
					<a href="/" className="navbar-section navbar-header">
						<h1>Train</h1>
					</a>

					<div className="navbar-section navbar-controls">
						<NavbarSignIn />
						<NavbarSignUp />
					</div>
				</div>
      </nav>
    );
  }
}

export default Navbar;
