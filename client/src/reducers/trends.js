const initialState = {};

export default function trends(state = initialState, action) {
  switch (action.type) {
    case "GET_TRENDS":
      return action.payload;
    default:
      return state;
  }
}
