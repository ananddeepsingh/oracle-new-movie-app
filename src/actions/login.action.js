import { LoginService } from '../services/login.service';
//Types
import {
  CLEAR_MESSAGE,
  LOGIN_SUCCESS,
  SET_MESSAGE
} from '../types';

export const loginAction = (number) => async (dispatch) => {
  const { response, error } = await LoginService(number);

  if (error) {
    const message = error?.message?.data?.message || error?.message || error?.toString() || "Something went wrong";

    dispatch({
      type: SET_MESSAGE,
      payload: message
    });

    return false;
  }

  return dispatch({
    type: LOGIN_SUCCESS,
    payload: response
  });
}
