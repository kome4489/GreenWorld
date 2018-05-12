import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Body from './Body';

class ManagerApp extends Component {
  render() {
    let body = null;
    switch (this.props.switchValue) {
      case 2:
        body = <Body />;
        break;
      default:
        break;
    }
    return (
      <div
        style={{
          display: 'block',
        }}
      >
        <div >
          <Header />
        </div>
        <div>
          {body}
        </div>
      </div>
    );
  }
}

ManagerApp.defaultProps = {
  switchValue: 1,
};

ManagerApp.propTypes = {
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
)(ManagerApp);
