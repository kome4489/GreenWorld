import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as queryActions from '../../actions/query';
import css from '../../../style/body.css';

class GoodCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodName: '',
      familyName: '',
      formName: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnCreateGood = this.handleOnCreateGood.bind(this);
  }

  handleOnChange(value, type) {
    this.setState({ [type]: value });
    this.props.queryActions.onChange(value, type);
  }

  handleOnCreateGood() {
    const body = {
      goodName: this.state.goodName,
      familyName: this.state.familyName,
      formName: this.state.formName,
    };
    this.props.queryActions.goodCreate(body, 'https://us-central1-weather-e382e.cloudfunctions.net/createDataTest', 'POST');
  }

  render() {
    return (
      <div className={css.body}>
        <div>
          <TextField
            hintText={'goodName'}
            floatingLabelText={'植物名'}
            value={this.state.goodName}
            onChange={(value, nextValue) => this.handleOnChange(nextValue, 'goodName')}
          />
        </div>
        <div>
          <TextField
            hintText={'familyName'}
            floatingLabelText={'科名'}
            value={this.state.familyName}
            onChange={(value, nextValue) => this.handleOnChange(nextValue, 'familyName')}
          />
        </div>
        <div>
          <TextField
            hintText={'formName'}
            floatingLabelText={'形態'}
            value={this.state.formName}
            onChange={(value, nextValue) => this.handleOnChange(nextValue, 'formName')}
          />
        </div>
        <div>
          <RaisedButton
            onClick={() => this.handleOnCreateGood()}
            label='登録'
            primary={this.props.primaryButton}
          />
        </div>
        <div>{this.props.message}</div>
      </div>
    );
  }
}

GoodCreate.defaultProps = {
  primaryButton: true,
};

GoodCreate.propTypes = {
  primaryButton: PropTypes.boolean,
  queryActions: PropTypes.objectOf(PropTypes.func),
  message: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    message: state.query.results.message,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    queryActions: bindActionCreators(queryActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoodCreate);
