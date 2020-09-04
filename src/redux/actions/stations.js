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
