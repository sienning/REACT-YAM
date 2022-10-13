import {
  SET_NB_EXP,
  SET_NB_BRELANS,
  ADD_EXPERIENCES,
  RESET,
} from "../constants/yam-constants";

// SOURCE DE VERITE == structure du store
const initialState = {
  nbExperiences: 0,
  nbBrelans: 0,
  experiences: [
    //Exemple d'experiences
    // [1, 4, 8]
  ],
  history: [],
};

const yamReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NB_EXP:
      const nbExperiences = action.payload;

      return {
        ...state,
        nbExperiences,
      };

    case SET_NB_BRELANS:
      let nbBrelans = state.nbBrelans;

      state.experiences.map((experience) => {
        if (experience.every((v) => v === experience[0])) {
          nbBrelans++;
        }
      });

      return {
        ...state,
        nbBrelans,
      };

    case ADD_EXPERIENCES:
      let experiences = [];

      for (let i = 0; i < state.nbExperiences; i++) {
        let experience = [];

        for (let j = 0; j < 3; j++) {
          experience.push(Math.floor(Math.random() * 6) + 1);
        }

        experiences.push(experience);
      }

      return {
        ...state,
        experiences,
      };

    case RESET:
      return {
        ...state,
        nbBrelans: 0,
        experiences: [],
      };

    default:
      return state;
  }
};

export default yamReducer;
