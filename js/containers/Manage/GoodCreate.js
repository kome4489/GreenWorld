import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import * as actions from '../../actions/app';
import * as queryActions from '../../actions/query';
import css from '../../../style/body.css';

class GoodCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_1: '',
      input_2: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnChat = this.handleOnChat.bind(this);
  }

  handleOnChange(value) {
    this.setState({ familyName: value });

    this.props.queryActions.onChange(value, 'chat');
  }
  handleOnChat() {
    const body = {
      familyName: this.state.familyName,
      formName: this.state.formName,
    };

    const url = '';
    this.props.queryActions.goodSearch(body, 1, url);
  }

  render() {
    return (
      <div className={css.body}>
        <div>
          <TextField
            hintText={'chat'}
            floatingLabelText={'会話'}
            value={this.state.familyName}
            onChange={(value, nextValue) => this.handleOnChange(nextValue)}
          />
        </div>
        <div>
          <RaisedButton
            onClick={() => this.handleOnChat()}
            label="会話開始"
            primary={this.props.primaryButton}
          />
        </div>
        <div>
          {this.state.familyName}
        </div>
      </div>
    );
  }
}

GoodCreate.defaultProps = {
  primaryButton: true,
};

GoodCreate.propTypes = {
  primaryButton: PropTypes.boolean,
  // actions: PropTypes.objectOf(PropTypes.func),
  queryActions: PropTypes.objectOf(PropTypes.func),
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch),
    queryActions: bindActionCreators(queryActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoodCreate);
