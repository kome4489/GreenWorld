import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
// import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
// import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationApps from 'material-ui/svg-icons/navigation/apps';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import * as actions from '../actions/app';
// import css from '../../style/header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuDisplay: false,
    };

    this.handleOnSwitch = this.handleOnSwitch.bind(this);
    // this.handleOnClickNavi = this.handleOnClickNavi.bind(this);
  }
  handleOnSwitch(index) {
    this.props.actions.onSwitch(index);
  }

  // handleOnClickNavi() {
  //   const menuDisplay = this.state.menuDisplay;
  //   this.setState({
  //     menuDisplay: !menuDisplay,
  //   });
  // }

  render() {
    const AppsMenu = (
      <IconMenu
        iconButtonElement={
          <IconButton><NavigationApps /></IconButton>
        }
        targetOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        <MenuItem onClick={() => this.handleOnSwitch(1)} primaryText="Maps" />
        <MenuItem onClick={() => this.handleOnSwitch(2)} primaryText="Books" />
        <MenuItem onClick={() => this.handleOnSwitch(3)} primaryText="Flights" />
        <MenuItem onClick={() => this.handleOnSwitch(4)} primaryText="Apps" />
      </IconMenu>
    );

    return (
      <div>
        <AppBar
          title="Title"
          iconElementRight={<IconButton><NavigationClose /></IconButton>}
          iconElementLeft={AppsMenu}
          onLeftIconButtonClick={this.handleOnClickNavi}
        />
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
