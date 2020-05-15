import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs } from "../store/actions";

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now(),
  });

  const addSmurf = (e) => {
    e.preventDefault();
    props.postSmurfs(newSmurf);
  };

  const handleChanges = (e) => {
    e.preventDefault();
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <form onSubmit={addSmurf}>
        <label htmlFor="whos the smurf?">
          whos the smurf?
          <input
            type="text"
            name="name"
            value={props.name}
            onChange={handleChanges}
          />
        </label>

        <label htmlFor="how old?">
          how old?
          <input
            type="text"
            name="age"
            onChange={handleChanges}
            value={props.age}
          />
        </label>

        <label htmlFor="how tall?">
          how tall?
          <input
            type="text"
            name="height"
            onChange={handleChanges}
            value={props.height}
          />
        </label>

        <button>give me the smurf!</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    errors: state.errors,
  };
};

export default connect(mapStateToProps, { postSmurfs })(SmurfForm);
