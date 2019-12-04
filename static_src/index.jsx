 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MessageField';


// let messages = ['Привет', 'Как дела?'];

// const handleClick = () => {
//    messages.push('Нормально');
//    ReactDOM.render(
//       <MessageField messages={ messages } />,
//       document.getElementById('root'),
//    );
// };


// const MessageComponent = (props) => <div>{props.text}</div>;

// const MessageField = (props) => {
//    const messageElements = props.messages.map(message => <MessageComponent text={ message } />);
//    return (
//       <div>
//          <h1> React Chat </h1>
//          {messageElements}
//          <button onClick={ handleClick}> Отправить сообщение</button>

//       </div>
//    );
  
//    // return props.messages.map(message => <MessageComponent text={ message } />);
// };

ReactDOM.render(
   // <MessageField messages={ messages } />,
   <App />,
   document.getElementById('root'),
);



