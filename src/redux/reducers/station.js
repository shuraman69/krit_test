const initialState = {
  current: null,
};

const station = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_STATION':
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};

export default station;
