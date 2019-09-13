import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectCity } from "../actions/index";

class ActiveCity extends Component {
  handleClick = () => {
    const { selectCity } = this.props;
    selectCity(null);
  }

  render() {
    const { city } = this.props;
    if (city) {
      const link = `https://kitt.lewagon.com/placeholder/cities/${city.slug}`;
      return (
        <div className="active-city">
          <h3>{city.name}</h3>
          <h2>{city.address}</h2>
          <img src={link} alt=""/>
          <div>
            <a href="#" onClick={this.handleClick}>Close</a>
          </div>
        </div>
      );
    }
    return (
      <div />
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);
