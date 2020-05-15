import { FETCH_SMURF, FETCH_SUCCESS, FETCH_FAIL, POST_DATA, POST_SUCCESS, POST_FAIL } from '../actions/index';


const initialState = {
    smurfs: [],
};

const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF:
            return {
                ...state,
                isFetching: true,
               
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
               
            }
        case FETCH_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case POST_DATA: 
            return {
                ...state,
                smurfs: [
                    ...state.smurfs
                ],
                isPosting: true,
            }
        case POST_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isPosting: false,
            }
        case POST_FAIL: 
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }

        default:
            return state;
    }

};

export default smurfReducer;