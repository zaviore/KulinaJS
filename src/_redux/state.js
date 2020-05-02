const initState = {
  data: 0,
  loading: false,
  error: null,
};

const STATES = (state = initState, action) => {
  switch (action.type) {
    case `STATES_PENDING`:
      return {
        ...state,
        loading: true,
      };

    case `STATES_FULFILLED`:
      console.log(action.payload);

      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case `STATES_REJECTED`:
      return {
        ...state,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default STATES;
