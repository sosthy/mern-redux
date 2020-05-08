import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import { bindActionCreators } from "redux";

const UserPage = ({ t, actions, users }) => {
  useEffect(() => {
    if (users.length === 0) actions.loadUsers();
  }, []);

  return (
    <div className="container">
      <h1>{t("users")}</h1>
      {users.map((user) => (
        <div key={user._id}>
          {user.firstname} - {user.lastname}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
};

UserPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(UserPage)
);
