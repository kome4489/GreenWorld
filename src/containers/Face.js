import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Face extends Component{
  constructor(props) {
    super(props);
    this.state = {
      aaa: null,
    }
  }
  render() {
    return (
        <div>
          ccccccccccc
          {this.props.aaa}
          {this.props.bbb}
        </div>
    );
  }
}

Face.propTypes = {
  aaa: PropTypes.number,
  bbb: PropTypes.number,
}

function mapStateToProps(state) {
  return {
    aaa: state.app.aaa,
    bbb: state.app.bbb,
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     // actions: bindActionCreators(actions, dispatch)
//   }
// }

export default connect(
  mapStateToProps,
  null,
)(Face)