import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({type: 'AUTH', data})
    history.push('/dashboard')
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
      dispatch({type: 'AUTH', data})
      history.push('/dashboard')
    } catch (error) {
      console.log(error.response.data.message);
      dispatch({type: 'ERROR', payload: error.response.data.message})
    }
  };