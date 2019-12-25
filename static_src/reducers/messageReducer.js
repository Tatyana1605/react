import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";

const messageStore = {
  messages: {
    1: { text: "Привет!", sender: 'bot' },
    2: { text: "Здравствуйте!", sender: 'bot' },
},
};



export default function messageReducer (store = messageStore, action) {
   
   switch (action.type) {
       case SEND_MESSAGE: {
              const messageId = Object.keys(store.messages).length + 1;
        return update(store, {
          messages: {$merge: {
            
                [messageId]: {
                  text: message, sender: sender}},
        
                }
      });
       }
       case ADD_CHAT: {
           const chatId = Object.keys(store.chats).length + 1;
           return update(store, {
              chats: { $merge: {
                  [chatId]: {
                      title: action.title, messageList: []
              } } },
           });
       }
       
       default:
           return store;
   }
}
