import React from 'react';
import Modal from './../shared/Modal';
import SignUpForm from './../shared/SignUpForm';

class NavbarSignUp extends React.Component {
  constructor(props) {
    super(props);
		this.state = { modalIsOpen: false };
  }

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

  render() {
    return (
			<div className="navbar-controls-item-wrapper">
				<a href="javascript:void(0)"
					 onClick={ this.openModal.bind(this) }
					 className="navbar-controls-item">Sign Up</a>

				<Modal isOpen={ this.state.modalIsOpen }
							 closeModal= { this.closeModal.bind(this) }
							 component={ SignUpForm } />
			</div>
    );
  }
}

export default NavbarSignUp;
