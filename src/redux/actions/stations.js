export const setStations = (items) => ({
  type: 'SET_STATIONS',
  payload: items,
});

export const setCurrentStation = ({ id, url }) => ({
  type: 'SET_CURRENT_STATION',
  payload: { id, url },
});

export const setStation = (id, item) => ({
  type: 'SET_STATION',
  payload: { id, item },
});

export const setTime = () => ({
  type: 'SET_TIME',
  payload: null,
});

export const setError = (message) => ({
  type: 'SET_ERROR',
  payload: message,
});

export const setLoading = (status) => ({
  type: 'SET_LOADING',
  payload: status,
});
