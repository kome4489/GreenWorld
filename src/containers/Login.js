import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions/app';

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      aaa: null,
      userCheck: false,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  componentDidUpdate() {
    if (this.state.userCheck) {
      browserHistory.push('/home');
    }
  }
  handleOnChange(event) {
    this.props.actions.onChange(event.target.id, event.target.value);
  }
  handleOnClick() {
    this.setState({
      userCheck: true,
    });
  }
  render() {
    const style = {
      height: 500,
      width: 600,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    const showItem = [];
    showItem.push(<div>
      <TextField
        id="id"
        type="id"
        hintText={'id'}
        value={this.props.id}
        onChange={this.handleOnChange}
      />
      </div>);
    showItem.push(<div>
      <TextField
        id="pass"
        type="pass"
        hintText={'password'}
        value={this.props.pass}
        onChange={this.handleOnChange}
      />
    </div>);
    showItem.push(<div>
      <RaisedButton
        label={'LOGIN'}
        onClick={this.handleOnClick}
      />
      </div>
    );
    console.log(this.props.aaa);
    console.log(this.props.bbb);
    
    return (
      <div>
      <Paper
        key="login"
        children={showItem}
        style={style}
        zDepth={1}
      />
      </div>
    );
  }
}

Login.propTypes = {
  aaa: PropTypes.number,
  bbb: PropTypes.number,
  action: PropTypes.fun,
  id: PropTypes.string,
  pass: PropTypes.string,
}

function mapStateToProps(state) {
  return {
    aaa: state.app.aaa,
    bbb: state.app.bbb,
    id: state.app.login.id,
    pass: state.app.login.pass,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)