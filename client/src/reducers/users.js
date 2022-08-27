export default (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload.user };
    case "FOLLOW_USER":
      return {
        ...state,
        users: state.users.map((follow) =>
          follow._id === action.payload._id ? action.payload : follow
        ),
      };
    default:
      return state;
  }
};
