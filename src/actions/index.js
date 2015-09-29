export const CHANGE_LOOK = 'CHANGE_LOOK';
export function changeLook(look) {
  return {
    type: CHANGE_LOOK,
    look
  };
}
