import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setCities } from '../actions/index';

import City from './city';

class CityList extends Component {
  handleClick = () => {
    console.log("hello")
  }
  UNSAFE_componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city => <City city={city} key={city.slug} />)}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
