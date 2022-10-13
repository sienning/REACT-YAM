import {
  SET_NB_EXP,
  SET_NB_BRELANS,
  ADD_LANCERS,
  RESET,
} from "../constants/yam-constants";

export const setNbLancers = (payload) => {
  return {
    type: SET_NB_EXP,
    payload,
  };
};

export const setNbBrelans = () => {
  return {
    type: SET_NB_BRELANS,
  };
};

export const addLancers = () => {
  return {
    type: ADD_LANCERS,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
