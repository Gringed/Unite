const authReducer = (state = { authData: null, error:[] }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case "ERROR":
      return { ...state, error: action.payload }
    case "LOGOUT":
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
