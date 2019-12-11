
import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
 import ChatList from './ChatList';
import './styles/styles.css';

export default class MessageField extends React.Component {

  constructor(props) {
    super(props);
    // создадим ref в поле `textInput` для хранения DOM-элемента
    this.textInput = React.createRef();
  }


   state = {
    messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
    input: '',
       
   };
       
    
   
     // Ставим фокус на <TextInput> при монтировании компонента
     componentDidMount() {
      this.textInput.current.focus();
    }

   handleClick = () => {
       this.setState({ messages: [ ...this.state.messages, {text: this.state.input, sender: 'me'} ],
      input: ''
      });
   };
   
handleChange = (e) => {
  this.setState({ input: e.target.value})
};

handleKeyUp = (e) => {
  if (e.keyCode === 13) {
    this.handleClick()
  }
}

   
   componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
      setTimeout(() =>
              this.setState({
                  messages: [ ...this.state.messages, {text: 'Не приставай ко мне, я робот!', sender: 'bot'} ] }),
          1000);
  }
    };

     

   render() {
       const messageElements = this.state.messages.map((message, index) => (
           <Message key={ index } text={ message.text } sender={message.sender} />));

       return <div className="layout">

              <header className="header"></header>
              <div className="center">
                <div className="chat-list">
               <ChatList></ChatList>

                </div>
                <div className="messages">
                <div className="message-field">
                    { messageElements }
                </div>
        
                <div style={ { width: '100%', display: 'flex' } }>
                  <TextField
                      name="input"
                      ref={ this.textInput }
                      fullWidth={ true }
                      hintText="Введите сообщение"
                      style={ { fontSize: '22px' } }
                      onChange={ this.handleChange }
                      value={ this.state.input }
                      onKeyUp={  this.handleKeyUp }
                  />
                  <FloatingActionButton onClick={this.handleClick }>
                      <SendIcon />
                  </FloatingActionButton>
                </div>
                </div>
                
              </div>
               

    </div>

   }
}
