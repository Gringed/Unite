export default (state = { users: [] }, action) => {
  switch (action.type) {
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
