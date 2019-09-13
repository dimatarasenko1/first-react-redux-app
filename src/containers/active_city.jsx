import React, { Component } from 'react';
import { connect } from "react-redux";

class ActiveCity extends Component {
  render() {
    if (this.props.city) {
      return (
        <div className="active-city">
          <h3>{this.props.city.name}</h3>
          <h2>{this.props.city.address}</h2>
        </div>
      );
    }
    return (
      <div></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
