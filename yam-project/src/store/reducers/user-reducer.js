import {
  SET_NB_JETONS,
  SET_MISE,
  RESET_USER
} from "../constants/user-constants";

// SOURCE DE VERITE == structure du store
const initialState = {
  nbJetons: 10,
  mise: 0,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MISE:
      const mise = action.payload;
      return {
        ...state,
        mise
      }
    case SET_NB_JETONS:
      const nbJetons = action.payload;

      return {
        ...state,
        nbJetons
      }


    case RESET_USER:
      return {
        nbJetons: 10,
        mise: 0,
      };

    default:
      return state;
  }
};

export default userReducer;
