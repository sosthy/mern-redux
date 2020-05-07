import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <Link to="/">Acceuil</Link>
  </div>
);

export default connect((state) => state)(Header);
