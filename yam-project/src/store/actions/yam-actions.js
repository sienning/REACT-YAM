import {
  SET_NB_EXP,
  SET_NB_BRELANS,
  ADD_EXPERIENCES,
  RESET,
} from "../constants/yam-constants";

export const setNbExperiences = (payload) => {
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

export const addExperiences = () => {
  return {
    type: ADD_EXPERIENCES,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
