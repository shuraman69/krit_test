const initialState = {
  loading: false,
  current: {
    id: null,
    url: null,
    data: {},
  },
  items: [],
};

const station = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATIONS':
      return {
        ...state,
        items: action.payload,
        loading: true,
      };
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
