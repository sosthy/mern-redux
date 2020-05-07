import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import VilleList from "../ville/VilleList";
import { bindActionCreators } from "redux";
import * as villeActions from "../../redux/actions/villeActions";

const DashboardPage = ({ actions, ...props }) => {
  const [villes, setVilles] = useState(props.villes);

  useEffect(() => {
    actions.loadVilles();
  }, []);

  return (
    <div>
      <h2>Here is dashboard !</h2>
      <VilleList villes={villes} />
    </div>
  );
};

DashboardPage.propTypes = {
  villes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    villes: state.villes,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(villeActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
