import React from 'react';
import PropTypes from "prop-types";

import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import InstallPopup from './InstallPopup';
import './styles/styles.css';


export default class Layout extends React.Component {

  static propTypes = {
    chatId: PropTypes.number,
     
};

static defaultProps = {
    chatId: 1,
};

// state = {
//   // chats: {
//   //     1: {title: 'Чат 1', messageList: [1]},
//   //     2: {title: 'Чат 2', messageList: [2]},
//   //     3: {title: 'Чат 3', messageList: []},
//   // },
//   messages: {
//       1: { text: "Привет!", sender: 'bot' },
//       2: { text: "Здравствуйте!", sender: 'bot' },
//   },
// };

// componentDidUpdate(prevProps, prevState) {
//   const { messages } = this.state;
//   if (Object.keys(prevState.messages).length < Object.keys(this.state.messages).length &&
//             this.state.messages[Object.keys(this.state.messages).length].sender === 'me') {
//             setTimeout(() => this.sendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
//         }
// }

// sendMessage = (message, sender) => {
//   const { messages } = this.state;
//   const { chatId } = this.props;

//   const messageId = Object.keys(messages).length + 1;
//   this.setState({
//       messages: {...messages,
//           [messageId]: {text: message, sender: sender}},
//   });
//   this.props.sendMessage(messageId, message, sender, chatId);
// };




// addChat = (title) => {
//   const { chats } = this.state;

//   const chatId = Object.keys(chats).length + 1;
//   this.setState({
//       chats: {...chats,
//           [chatId]: {title: title, messageList: []}},
//   })
// };

  render() {
    return (
      <div className="layout">
        <InstallPopup/> 
          <Header chatId={ this.props.chatId }></Header>
        
        <div className="center">
          <div className="chat-list">
            <ChatList/> 
          </div>
          <div className="messages">
          <MessageField chatId={ this.props.chatId }/>
          </div>
        </div>
      </div>
    )
  }
  
}

// const mapStateToProps = ({}) => ({});

// const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Layout);