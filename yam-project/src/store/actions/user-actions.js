import {
  SET_NB_JETONS,
  REMOVE_NB_JETONS,
  SET_MISE,
  RESET_USER
} from "../constants/user-constants";

export const setNbJetons = (payload) => {
  return {
    type: SET_NB_JETONS,
    payload,
  };
};


export const setMise = (payload) => {
  return {
    type: SET_MISE,
    payload
  };
};

export const resetUser = () => {
  return {
    type: RESET_USER,
  };
};
