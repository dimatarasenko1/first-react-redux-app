import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectCity } from "../actions/index";

class City extends Component {
  handleClick = () => {
    const { selectCity, city } = this.props;
    selectCity(city);
  };

  render() {
    const { selectedCity, city } = this.props;
    let classes = "list-group-item";
    if (city === selectedCity) {
      classes += " active";
    }
    return (
      <div className={classes} onClick={this.handleClick} role="link" tabIndex={1}>
        <p>{city.name}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
