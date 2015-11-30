import React from 'react';

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
						<a href="#" className="navbar-controls-item">Sign In</a>
						<a href="#" className="navbar-controls-item">Sign Up</a>
					</div>
				</div>
      </nav>
    );
  }
}

export default Navbar;
