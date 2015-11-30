import React from 'react';
import { Link } from 'react-router';
// import FooterStore from '../stores/FooterStore'
// import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
