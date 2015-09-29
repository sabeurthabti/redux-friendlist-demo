import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  multipleOutFitLook: 1
};

export default function friends(state = initialState, action) {
  switch (action.type) {


    case types.CHANGE_LOOK:
     const newLookNumber = action.multipleOutFitLook;
      return {
        ...state,
        multipleOutFitLook: newLookNumber

      }

    default:
      return state;
  }
}
