import React from 'react';
import PropTypes from 'prop-types';

export default function Paper(props) {
  return <div className={props.className}>{props.children}</div>;
}

Paper.propTypes = {
  children: PropTypes.element,
};
