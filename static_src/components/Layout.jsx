import React from 'react';
import PropTypes from "prop-types";
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import './styles/styles.css';


export default class Layout extends React.Component {

  static propTypes = {
    chatId: PropTypes.number,
};

static defaultProps = {
    chatId: 1,
};
  render() {
    return (
      <div className="layout">
        {/* <header className="header" chatId={ this.props.chatId }> */}
          <Header chatId={ this.props.chatId }></Header>
        {/* </header> */}
        <div className="center">
          <div className="chat-list">
            <ChatList></ChatList>  
          </div>
          <div className="messages">
            <MessageField chatId={ this.props.chatId }></MessageField>
          </div>
        </div>
      </div>
    )
  }
  
}