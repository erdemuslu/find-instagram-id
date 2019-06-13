export default function userReducer(state, action) {
  switch (action.type) {
    case 'updateData':
      console.log(action);
      return action.value;
    default:
      return state;
  }
}
