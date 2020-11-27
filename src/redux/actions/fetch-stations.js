import { API_URL, CONNECT_ERROR } from '../../data';

export const fetchStations = () => async (dispatch) => {
  try {
    const res = await fetch(API_URL);
    const result = await res.json();

    dispatch({
      type: 'SET_STATIONS',
      payload: result,
    });
  } catch {
    dispatch({
      type: 'SET_ERROR',
      payload: CONNECT_ERROR,
    });
  }
};
