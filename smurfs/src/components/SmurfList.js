import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";

import { getSmurf } from "../store/actions";

const SmurfList = (props) => {
  useEffect(() => {
    props.getSmurf();
  }, []);

  return (
    <div>
      <h1>whats a smurf?</h1>
      <div>
        {props.smurfs.map((smurf) => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfReducer.smurfs,
    isFetching: state.smurfReducer.isFetching,
    errors: state.smurfReducer.errors,
  };
};

export default connect(mapStateToProps, { getSmurf })(SmurfList);
