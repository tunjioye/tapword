import React from 'react';
import PropTypes from 'prop-types';
// import './Loading.scss';

const Loading = (props) => (
  <div className={(props.large ? 'loading' : 'loading loading-lg')}></div>
);

Loading.propTypes = {
  large: PropTypes.bool
};

Loading.defaultProps = {
  large: false
};

export default Loading;
