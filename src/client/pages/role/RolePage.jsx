import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import * as roleActions from "../../redux/actions/roleActions";
import { bindActionCreators } from "redux";

const RolePage = ({ t, actions, roles }) => {
  useEffect(() => {
    if (roles.length === 0) actions.loadRoles();
  }, []);

  return (
    <div className="container">
      <h1>{t("roles")}</h1>
      {roles.map((role) => (
        <div key={role._id}>{role.name}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    roles: state.roles,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(roleActions, dispatch),
  };
};

RolePage.propTypes = {
  roles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(RolePage));
