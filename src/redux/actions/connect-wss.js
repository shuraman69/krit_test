import { API_WSS, CONNECT_ERROR } from '../../data';

export const connectWss = (items) => (dispatch) => {
  items.map(({ station }) => {
    function connect() {
      const ws = new WebSocket(API_WSS + station.shortcode);

      ws.onopen = () => {
        dispatch({
          type: 'SET_OPEN_WSS',
          payload: true,
        });
      };

      ws.onmessage = ({ data }) => {
        const item = JSON.parse(data);
        const { id } = item.station;

        dispatch({
          type: 'UPDATE_STATION',
          payload: { id, item },
        });
      };

      ws.onerror = () => {
        dispatch({
          type: 'SET_ERROR',
          payload: CONNECT_ERROR,
        });

        ws.close();
      };

      ws.onclose = () => setTimeout(connect, 5000);
    }

    return connect();
  });

  setInterval(() => dispatch({ type: 'SET_TIME' }), 1000);
};
