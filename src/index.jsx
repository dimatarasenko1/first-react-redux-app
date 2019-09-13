import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import '../assets/stylesheets/application.scss';

import App from './components/app';
import citiesReducer from "./reducers/cities_reducer";
import selectedCityReducer from "./reducers/selected_city_reducer";

const reducers = combineReducers({
  cities: citiesReducer,
  selectedCity: selectedCityReducer
});

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    root
  );
}
