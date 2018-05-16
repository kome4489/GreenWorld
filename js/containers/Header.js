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
      titleLabel: '会話',
    };

    this.handleOnCloseClick = this.handleOnCloseClick.bind(this);
  }

  handleOnSwitch(index) {
    this.props.actions.onSwitch(index);
    let titleLabel;
    switch (index) {
      case 1:
        titleLabel = '会話';
        break;
      case 2:
        titleLabel = '植物検索';
        break;
      case 3:
        titleLabel = '植物登録';
        break;
      case 4:
        titleLabel = 'みんなの写真';
        break;
      case 5:
        titleLabel = 'お問い合わせ';
        break;
      default:
        break;
    }

    this.setState({
      titleLabel,
    });
  }

  handleOnCloseClick(index) {
    console.log(this);
    window.close();
  }

  render() {
    const AppsMenu = (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <NavigationApps
              color={'white'}
            />
          </IconButton>
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
        <MenuItem onClick={() => this.handleOnSwitch(1)} primaryText="会話" />
        <MenuItem onClick={() => this.handleOnSwitch(2)} primaryText="植物検索" />
        <MenuItem onClick={() => this.handleOnSwitch(3)} primaryText="植物登録" />
        <MenuItem onClick={() => this.handleOnSwitch(4)} primaryText="みんなの写真" />
        <MenuItem onClick={() => this.handleOnSwitch(5)} primaryText="お問い合わせ" />
      </IconMenu>
    );

    return (
      <div>
        <AppBar
          title={this.state.titleLabel}
          iconElementRight={
            <IconButton>
              <NavigationClose
                color={'white'}
              />
            </IconButton>
          }
          iconElementLeft={AppsMenu}
          // onLeftIconButtonClick={this.handleOnMenuClick}
          onRightIconButtonClick={this.handleOnCloseClick}
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
