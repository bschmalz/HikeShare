import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Dashboard = (props) => {
  if (props.auth === false) return <Redirect to="/" />;
  if (props.auth) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>
          Dashboard.
        </h1>
      </div>
    );
  }
  return null;
};


Dashboard.defaultProps = {
  auth: null,
};

Dashboard.propTypes = {
  auth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);

