import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions/app';

class Info extends Component{
  constructor(props) {
    super(props);
    this.state = {
      aaa: null,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    this.props.actions.onChange(event.target.id, event.target.value);
  }
  // handleOnClick() {
  //   fetch('http://localhost:8000/', { 
  //       method: 'GET',
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Content-Type": "application/json;charset=utf-8"
  //       },
  //       mode : 'no-cors',
  //       data: {
  //         name: 'aaa',
  //         job: 'bbb',
  //       }
  //     })
  //     .then(function(response) {
  //       console.log(response);
  //       return response.text().then(function(text) {
  //         return text ? JSON.parse(text) : {}
  //       });
  //     }).catch(function(error) {
  //       console.log(error);
  //     })
  // }
  handleOnClick() {
    fetch('http://localhost:8000/',{
      mode: 'no-cors'
    })
    .then(response => {
      console.log(response);
      response.json()
    })
    .then(json => console.log(json))
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
    
    return (
      <div>
      <Paper
        key="login"
        children={showItem}
        style={style}
        zDepth={1}
      />
      {this.props.aaa}
      {this.props.bbb}
      </div>
    );
  }
}

Info.propTypes = {
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
)(Info)