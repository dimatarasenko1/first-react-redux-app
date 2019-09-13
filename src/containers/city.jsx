import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectCity } from "../actions/index";

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  };

  render() {
    let classes = "list-group-item";
    if (this.props.city === this.props.selectedCity) {
      classes += " active";
    }
    return (
      <div className={classes} onClick={this.handleClick} role="link" tabIndex={1}>
        <p>{this.props.city.name}</p>
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
