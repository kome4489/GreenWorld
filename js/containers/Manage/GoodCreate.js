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
      path: '',
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
      name: this.state.goodName,
      family: this.state.familyName,
      form: this.state.formName,
      path: this.state.path,
    };
    this.props.queryActions.goodCreate(body, 'http://www.silvereye.work/api/plant/add', 'POST');
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
          <TextField
            hintText={'path'}
            floatingLabelText={'パス'}
            value={this.state.path}
            onChange={(value, nextValue) => this.handleOnChange(nextValue, 'path')}
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
