import * as types from '../constants/ActionTypes';

export function addFriend(name) {
  return {
    type: types.ADD_FRIEND,
    name
  };
}
export function changeLook(name) {
  return {
    type: types.CHANGE_LOOK,
    name
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}
