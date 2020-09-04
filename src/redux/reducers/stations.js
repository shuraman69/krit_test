import { API_WSS } from '../../data/';
import store from '../store';
import { setStation, setTime } from '../actions/stations';

const initialState = {
  loading: false,
  current: {
    id: null,
    url: null,
    data: {},
  },
  items: [],
  wss: [],
};

const station = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATIONS':
      const wssObj = action.payload.map((item) => {
        const ws = new WebSocket(API_WSS + item.station.shortcode);

        ws.onmessage = function (response) {
          const data = JSON.parse(response.data);
          store.dispatch(setStation(data.station.id, data));
        };
        return ws;
      });

      setInterval(() => {
        store.dispatch(setTime());
      }, 1000);

      return {
        ...state,
        items: action.payload,
        wss: wssObj,
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
      const newStateItems = state.items;

      newStateItems[index] = action.payload.item;

      return {
        ...state,
        items: newStateItems,
      };
    case 'SET_TIME':
      const stationTimer = state.items;

      stationTimer.map((item) => {
        item.now_playing.remaining--;
        item.now_playing.elapsed++;
        return false;
      });

      return {
        ...state,
        items: stationTimer,
      };
    default:
      return state;
  }
};

export default station;
