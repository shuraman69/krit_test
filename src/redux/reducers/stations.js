import { API_WSS, CONNECT_ERROR } from '../../data/';
import store from '../store';
import { setStation, setTime, setError } from '../actions/stations';

const initialState = {
  loading: false,
  current: {
    id: null,
    url: null,
    data: {},
  },
  items: [],
  wss: [],
  errorMessage: false,
};

const station = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATIONS':
      const wssObj = action.payload.map((item) => {
        function connect() {
          const ws = new WebSocket(API_WSS + item.station.shortcode);

          ws.onopen = function (e) {
            store.dispatch(setError(false));
          };
          ws.onmessage = function (response) {
            const data = JSON.parse(response.data);

            store.dispatch(setStation(data.station.id, data));
          };

          ws.onerror = function (error) {
            store.dispatch(setError(CONNECT_ERROR));
            ws.close();
          };

          ws.onclose = function (event) {
            if (!event.wasClean) {
              store.dispatch(setError(CONNECT_ERROR));
            }
            setTimeout(connect, 5000);
          };

          return ws;
        }

        return connect();
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
        errorMessage: '',
      };
    case 'SET_TIME':
      const stationTimer = state.items;

      if (!state.errorMessage) {
        stationTimer.map((item) => {
          item.now_playing.remaining--;
          item.now_playing.elapsed++;

          return false;
        });
      }

      return {
        ...state,
        items: stationTimer,
      };
    case 'SET_ERROR':
      return {
        ...state,
        errorMessage: action.payload,
        // loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default station;
