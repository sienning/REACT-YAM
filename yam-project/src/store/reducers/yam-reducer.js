import {
  SET_NB_EXP,
  SET_NB_BRELANS,
  ADD_LANCERS,
  RESET,
} from "../constants/yam-constants";

// SOURCE DE VERITE == structure du store
const initialState = {
  nbLancers: 0,
  nbBrelans: 0,
  lancers: [],
};

const yamReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NB_EXP:
      const nbLancers = action.payload;

      return {
        ...state,
        nbLancers,
      };

    case SET_NB_BRELANS:
      let nbBrelans = state.nbBrelans;

      state.lancers.map((lancer) => {
        if (lancer.every((v) => v === lancer[0])) {
          nbBrelans++;
        }
      });

      return {
        ...state,
        nbBrelans,
      };

    case ADD_LANCERS:
      let lancers = [];

      for (let i = 0; i < state.nbLancers; i++) {
        let lancer = [];

        for (let j = 0; j < 3; j++) {
          lancer.push(Math.floor(Math.random() * 6) + 1);
        }

        lancers.push(lancer);
      }

      return {
        ...state,
        lancers,
      };

    case RESET:
      return {
        ...state,
        nbBrelans: 0,
        lancers: [],
      };

    default:
      return state;
  }
};

export default yamReducer;
