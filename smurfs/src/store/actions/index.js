import axios from "axios";

export const FETCH_SMURF = "FETCH_SMURF";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getSmurf = () => (dispatch) => {
  axios
    .get(`http://localhost:3333/smurfs`)
    .then((res) => {
      console.log("ARRAY of smurfs", res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAIL, payload: err });
    });
};

export const POST_DATA = "POST_DATA";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const postSmurfs = (smurfs) => (dispatch) => {
  dispatch({ type: POST_DATA });

  axios
    .post(`http://localhost:3333/smurfs`, smurfs)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_FAIL, payload: err.response });
    });
};

export const deleteSmurf = (smurfs) => (dispatch) => {
  axios
    .delete(`http://localhost:3333/smurfs/${smurfs}`)
    .then((res) => {
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "FETCH_FAIL", payload: err.response });
    });
};
