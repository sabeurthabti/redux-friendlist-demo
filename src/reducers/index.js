import { combineReducers } from 'redux';
import { CHANGE_LOOK } from '../actions';

const initialState = {
  multipleOutFitLook: 1
};

function look(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOOK:
      return {
        ...state,
        multipleOutFitLook: action.look
      };
    default:
      return state;
  }
}

// other reducers
function friends(state = []/*, action*/) {
  return state;
}

export default combineReducers({
  look,
  friends
});
