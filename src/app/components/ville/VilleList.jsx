import React from "react";
import PropTypes from "prop-types";

const VilleList = ({ villes }) => (
  <div>
    {villes.map((ville) => (
      <div key={ville.id}>{ville.name}</div>
    ))}
  </div>
);

VilleList.propTypes = {
  villes: PropTypes.array.isRequired,
};

export default VilleList;
