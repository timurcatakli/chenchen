import React from "react";
import types from "prop-types";

const Song = ({ data }) => {
  const { trackName } = data;
  return <h4>{trackName}</h4>;
};

Song.propTypes = {};

export default Song;
