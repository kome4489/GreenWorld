import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import Paper from 'material-ui/Paper';
// import Menu from 'material-ui/Menu';
// import MenuItem from 'material-ui/MenuItem';
// import TextField from 'material-ui/TextField';
import * as actions from '../actions/app';
import Face from './Face'

class MangerApp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      aaa: null,
    }
    this.props.actions.switchScreen(3, 4);
  }
  //   this.handleOnClick = this.handleOnClick.bind(this);
  // }

  // handleOnClick(item) {
  //   this.setState({
  //     aaa: item,
  //   });
  // }

  render() {
    // const style = {
    //   display: 'inline-block',
    //   margin: '0px 0px 16px 0',
    // };
    return (
        <div>
          aaaaaaaaaaaa
          <div>
            <Face />
          </div>
        </div>
    );
  }
}

MangerApp.propTypes = {
  // store: PropTypes.object.isRequired,
  actions: PropTypes.object,
}

// function mapStateToProps(state) {
//   return {
//     entities: state.entities,
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MangerApp)
// export default MangerApp;
