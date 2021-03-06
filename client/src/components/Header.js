import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return <li><a href="auth/google">Login With Google</a></li>;
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className="left brand-logo"
          >
            Emaily
          </Link>

          <ul className="right">
            <li><Link to="/dashboard">Dash</Link></li>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  auth: null,
};

Header.propTypes = {
  auth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
