import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import Paper from 'material-ui/Paper';
// import Menu from 'material-ui/Menu';
// import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions/app';
// import Face from './Face'
// import Login from './Login'
import Info from './Info'

class MangerApp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      aaa: null,
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  //   this.handleOnClick = this.handleOnClick.bind(this);
  // }

  handleOnClick() {
    this.props.actions.switchScreen(3, 4);
  }

  render() {  
    // const style = {
    //   display: 'inline-block',
    //   margin: '0px 0px 16px 0',
    // };
    return (
        <div className="container">
          aaaaaaaaaaaa
          <div>
            <RaisedButton
              label={'button'}
              onClick={this.handleOnClick}
            >
              aaaaaaaaaaaa
            </RaisedButton>
          </div>
          {/* <div>
            <Face />
          </div>
          <div>
            <Login />
          </div> */}
          <div>
            <Info />
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
