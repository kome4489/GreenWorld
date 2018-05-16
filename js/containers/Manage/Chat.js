import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as actions from '../../actions/query';
import * as chatActions from '../../actions/chat';
import css from '../../../style/body.css';

class Chat extends Component {
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

    this.props.actions.onChange(value, 'chat');
  }
  handleOnChat() {
    const body = {
      familyName: this.state.familyName,
      formName: this.state.formName,
    };

    const url = '';
    this.props.chatActions.chatStart(body, 1, url);
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

Chat.defaultProps = {
  primaryButton: true,
};

Chat.propTypes = {
  primaryButton: PropTypes.boolean,
  actions: PropTypes.objectOf(PropTypes.func),
  chatActions: PropTypes.objectOf(PropTypes.func),
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    chatActions: bindActionCreators(chatActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);
