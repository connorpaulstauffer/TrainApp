import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
		if (this.props.isOpen) {
	    return (
				<div className="overlay" onClick={ this.props.closeModal }>
					<div className="content">
						{ this.props.children }
					</div>
				</div>
	    );
		} else {
			return (
				<span></span>
			);
		}
  }
}

export default Modal;
