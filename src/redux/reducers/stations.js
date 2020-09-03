const initialState = {
  loading: false,
  current: null,
  items: [],
  audioUrl: '',
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
        loading: true,
      };
    default:
      return state;
  }
};

export default station;
