import React from 'react';
import PropTypes from "prop-types";
import TransitionsModal from "./profile/modal";
import CircularProgress from 'material-ui/CircularProgress';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import PushToggle from '../components/PushToggle';
import './styles/styles.css';

 class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    chats: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,

    };

    static defaultProps = {
        chatId: 1,
    };
    render() {
      if (this.props.isLoading) {
        return <CircularProgress />
    }

      const { chats, chatId } = this.props;
        return (
            <div className="header"  >
               <PushToggle />

              <span style={ { fontSize: '20px', padding: '20px' } }> 
               { chats[chatId].title }
              </span>
              <TransitionsModal></TransitionsModal>
            </div>
        )
    }
}

const mapStateToProps = ({ chatReducer}) => ({
  chats: chatReducer.chats,
  isLoading: chatReducer.isLoading,

});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);