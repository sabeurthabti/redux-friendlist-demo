import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions.js';

class AppView extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const {dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);

    return (
      <div>
      <h1 onClick={function() {
              console.log(actions.changeLook(2))
              }}>Hello - {this.props.look}</h1>
      </div>
    );
  }
}
function mapStateToProps(state) {
  debugger;
    return {
        look: state
    };
}

export default connect(mapStateToProps)(AppView)
