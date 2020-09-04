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
    case 'SET_STATION':
      const index = state.items.findIndex(
        (item) => item.station.id === action.payload.id
      );
      const newstateitems = state.items;

      newstateitems[index] = action.payload.item;
      return {
        ...state,
        items: newstateitems,
      };
    default:
      return state;
  }
};

export default station;
