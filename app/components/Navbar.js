import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar">
				<div className="navbar-container">
					<div className="navbar-section navbar-header">
						<h1>Train</h1>
					</div>

					<div className="navbar-section navbar-controls">
						<div className="navbar-controls-item">
							<a href="#">Sign In</a>
						</div>
						<div className="navbar-controls-item">
							<a href="#">Sign Up</a>
						</div>
					</div>
				</div>
      </nav>
    );
  }
}

export default Navbar;
