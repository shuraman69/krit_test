export const setStations = (items) => ({
  type: 'SET_STATIONS',
  payload: items,
});

export const setCurrentStation = (current) => ({
  type: 'SET_CURRENT_STATION',
  payload: current,
});
