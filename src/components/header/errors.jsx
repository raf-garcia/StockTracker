import React from 'react';
import {connect} from 'react-redux';

const Errors = ({error}) => {
  return <span className="error">{error}</span>;
}

const mapStateToProps = ({error}) => ({ error });

export default connect(mapStateToProps,null)(Errors);