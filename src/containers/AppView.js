import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AppView extends Component {
  static propTypes = {
    changeLook: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <h1 onClick={() => this.props.changeLook(2)}>
          Hello - {this.props.look}
        </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        look: state.look.multipleOutFitLook
    };
}

export default connect(
  mapStateToProps,
  actions
)(AppView)
