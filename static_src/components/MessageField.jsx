
import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import './styles/styles.css';
 class MessageField extends React.Component {
  static propTypes = {
    chatId: PropTypes.number.isRequired,
    messages: PropTypes.object.isRequired,
    chats: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,


  };

  state = {
    input: '',
  };


  // constructor(props) {
  //   super(props);
  //   // создадим ref в поле `textInput` для хранения DOM-элемента
  //   this.textInput = React.createRef();
  // }


   
       
    
   
     // Ставим фокус на <TextInput> при монтировании компонента
    //  componentDidMount() {
    //   this.textInput.current.focus();
    // }
 
   
handleChange  = (event) => {
  this.setState({ [event.target.name]: event.target.value });
};


handleKeyUp = (event ) => {
  if (event.keyCode === 13) { // Enter
      this.handleSendMessage(this.state.input, 'me')
  }
};


   

// handleSendMessage = (message, sender) => {
//   const { messages, chats, input } = this.state;
//   const { chatId } = this.props;

//   if (input.length > 0 || sender === 'bot') {
//       const messageId = Object.keys(messages).length + 1;
//       this.setState({
//           messages: {...messages,
//               [messageId]: {text: message, sender: sender}},
//           chats: {...chats,
//               [chatId]: { ...chats[chatId],
//                   messageList: [...chats[chatId]['messageList'], messageId]
//               }
//           },
//       })
//   }
//   if (sender === 'me') {
//       this.setState({ input: '' })
//   }
// };
handleSendMessage = (message, sender) => {
  if (message.length > 0 || sender === 'bot') {
      this.props.sendMessage(message, sender);
  }
  if (sender === 'me') {
      this.setState({ input: '' })
  }
};

     

   render() {
     
    const { chatId, messages, chats } = this.props;

       const messageElements = chats[chatId].messageList.map(messageId => (
           <Message
               key={ messageId }
               text={ messages[messageId].text }
               sender={ messages[messageId].sender }
           > </Message>));

       return [ 
          <div style={ {height: '90%'}}>
                <div  key='message-field' className="message-field"   >
                    { messageElements }
                </div>
        
                <div key='text-field' style={ { width: '100%', display: 'flex' } }  >
                  <TextField
                    name="input"
                    fullWidth={ true }
                    hintText="Введите сообщение"
                    style={ { fontSize: '22px' } }
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                  /> 
                  <FloatingActionButton onClick={ () => this.handleSendMessage(this.state.input, 'me') }>
                     <SendIcon> </SendIcon>
                  </FloatingActionButton>
                </div>
                </div>
                 ]
                }
}

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
  messages: chatReducer.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);