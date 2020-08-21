import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert, closeAlert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.msg}
        <span
          style={{
            display: 'inline-block',
            float: 'right',
            marginRight: '5px',
            cursor: 'pointer',
          }}
          onClick={closeAlert}>
          <i className='fas fa-times'></i>
        </span>
      </div>
    )
  );
};

Alert.propTypes = {
  closeAlert: PropTypes.func.isRequired,
};

export default Alert;
