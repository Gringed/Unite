import * as api from "../api";

export const signin = (formData, history, setError) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({type: 'AUTH', data})
    history.push('/dashboard')
  } catch (error) {
    console.log(error.response.data.message);
    if (error.response.data.message) {
      setError(error.response.data.message)
    }
    else{
      setError()
    }
  }
};

export const signup = (formData, history, setError) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
      setError()
      dispatch({type: 'AUTH', data})
      history.push('/dashboard')
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response.data.message) {
        setError(error.response.data.message)
      }
      else{
        setError()
      }
    }
  };