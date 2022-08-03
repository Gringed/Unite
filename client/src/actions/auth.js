import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
  try {
    history.push('/dashboard')
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
      history.push('/dashboard')
    } catch (error) {
      console.log(error.message);
    }
  };