const Media = new Audio();

const initialState = {
  loading: true,
  current: {
    id: null,
    url: null,
    data: {},
  },
  items: [],
  openWss: false,
  errorMessage: false,
};

const station = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATIONS': {
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    }
    case 'SET_CURRENT_STATION': {
      Media.pause();
      Media.src = action.payload.url;

      if (action.payload.url) {
        Media.load();

        Media.addEventListener('canplay', () => {
          Media.play();
        });
      }

      return {
        ...state,
        current: action.payload,
      };
    }
    case 'UPDATE_STATION': {
      const index = state.items.findIndex(
        (item) => item.station.id === action.payload.id,
      );
      const newStateItems = state.items;

      newStateItems[index] = action.payload.item;

      return {
        ...state,
        items: newStateItems,
        errorMessage: false,
      };
    }
    case 'SET_TIME': {
      const stationTimer = state.items;

      if (!state.errorMessage) {
        stationTimer.map((item) => {
          const dataTime = item;

          dataTime.now_playing.remaining -= 1;
          dataTime.now_playing.elapsed += 1;

          return false;
        });
      }

      return {
        ...state,
        items: stationTimer,
      };
    }
    case 'SET_ERROR':
      return {
        ...state,
        errorMessage: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: false,
      };
    case 'SET_OPEN_WSS':
      return {
        ...state,
        openWss: true,
      };
    default: {
      return state;
    }
  }
};

export default station;
