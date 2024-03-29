export default (state = {loading: true, users: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, loading: true };
      case "END_LOADING":
      return { ...state, loading: false };
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload.user };
    case "FOLLOW_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case "UPDATE_PROFILE":
      return  {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      }
    default:
      return state;
  }
};
