import cities from "../cities";

export function setCities() {
  // here an api call for search would go
  return {
    type: "SET_CITIES",
    payload: cities
  };
}

export function selectCity(city) {
  return {
    type: 'SELECT_CITY',
    payload: city
  };
}
