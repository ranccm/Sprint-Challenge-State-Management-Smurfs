import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../store/actions";

const Smurf = (props) => {
  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <h3>{props.smurf.age}</h3>
      <h3>{props.smurf.height}</h3>
      <button
        onClick={() => {
          props.deleteSmurf(props.smurf.id);
        }}
      >
        Remove this Smurf
      </button>
    </div>
  );
};

export default connect(null, { deleteSmurf })(Smurf);
