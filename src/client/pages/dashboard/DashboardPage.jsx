import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const DashboardPage = ({ actions, ...props }) => {
  return (
    <div>
      <h1>Tableau de bord</h1>
    </div>
  );
};

DashboardPage.propTypes = {
  villes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    villes: state.villes ? [] : [],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({}, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
