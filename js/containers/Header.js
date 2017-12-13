import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import * as actions from '../actions/app';
import css from '../../style/header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleOnSwitch = this.handleOnSwitch.bind(this);
  }
  handleOnSwitch(index) {
    this.props.actions.onSwitch(index);
  }

  render() {
    return (
      <div>
        <Menu className={css.menu}>
          <MenuItem onClick={() => this.handleOnSwitch(1)} primaryText="Maps" />
          <MenuItem onClick={() => this.handleOnSwitch(2)} primaryText="Books" />
          <MenuItem onClick={() => this.handleOnSwitch(3)} primaryText="Flights" />
          <MenuItem onClick={() => this.handleOnSwitch(4)} primaryText="Apps" />
        </Menu>
      </div>
    );
  }
}

Header.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Header);
