export default function userReducer(state, action) {
  switch (action.type) {
    case 'updateData':
      return action.value;
    default:
      return state;
  }
}
