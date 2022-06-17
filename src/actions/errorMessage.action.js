// types
import {
  CLEAR_MESSAGE,
  SET_MESSAGE
} from '../types';

export const setMessageAction = () => ({
  type: SET_MESSAGE,
  payload: message
})

export const clearMessageAction = () => ({
  type: CLEAR_MESSAGE
})
