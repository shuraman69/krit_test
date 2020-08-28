const initialState = {
  current: null,
  items: {
    station: {},
    live: {},
    now_playing: {
      song: {},
    },
  },
};

const station = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_STATION':
      return {
        ...state,
        current: action.payload,
      };
    case 'SET_STATIONS':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default station;
