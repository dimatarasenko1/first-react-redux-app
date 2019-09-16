import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setCities } from '../actions/index';

import City from './city';

class CityList extends Component {
  constructor(props) {
    super(props);
    const { setCities } = props;
    setCities();
  }
  // componentWillMount() {
  //   const { setCities } = this.props;
  //   setCities();
  // }

  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        {cities.map(city => <City city={city} key={city.slug} />)}
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
