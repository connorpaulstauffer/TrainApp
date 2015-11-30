import React from 'react';
import Modal from './../shared/Modal';
import SignInForm from './../shared/SignInForm';

class NavbarSignIn extends React.Component {

  constructor(props) {
    super(props);
		this.state = { modalIsOpen: false };
  }


	openModal() {
		this.setState({modalIsOpen: true});
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

  render() {
    return (
			<div className="navbar-controls-item-wrapper">
				<a href="javascript:void(0)"
					 onClick={ this.openModal }
					 className="navbar-controls-item">Sign In</a>

				<Modal isOpen={ this.state.modalIsOpen } component={ SignInForm } />
			</div>
    );
  }
}

export default NavbarSignIn;
