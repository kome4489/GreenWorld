import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Chat from './Manage/Chat';
import GoodSearch from './Manage/GoodSearch';
import GoodCreate from './Manage/GoodCreate';
// import GoodPhoto from './Manage/GoodPhoto';
// import MailSend from './Manage/MailSend';
import css from '../../style/body.css';

class Body extends Component {
  render() {
    let bodyItem = null;

    switch (this.props.switchValue) {
      case 1:
        bodyItem = <Chat />;
        break;
      case 2:
        bodyItem = <GoodSearch />;
        break;
      case 3:
        bodyItem = <GoodCreate />;
        break;
      // case 4:
      //   bodyItem = <GoodPhoto />;
      //   break;
      // case 5:
      //   bodyItem = <MailSend />;
      //   break;
      default:
        break;
    }
    return (
      <div className={css.body}>
        {bodyItem}
      </div>
    );
  }
}

Body.defaultProps = {
  switchValue: 1,
};

Body.propTypes = {
  switchValue: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    switchValue: state.app.switchValue,
  };
}

export default connect(
  mapStateToProps,
  null,
)(Body);
