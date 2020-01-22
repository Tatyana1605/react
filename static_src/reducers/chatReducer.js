import update from 'react-addons-update';
import { SEND_MESSAGE  } from '../actions/messageActions';
import { SUCCESS_CHATS_LOADING } from "../actions/chatActions";

import { ADD_CHAT, HIGHLIGHT_CHAT, UNHIGHLIGHT_CHAT } from "../actions/chatActions";

const initialStore = {
   chats: {
    // 1: {title: 'Чат 1', messageList: []},
    // 2: {title: 'Чат 2', messageList: []},
    // 3: {title: 'Чат 3', messageList: []},
    },
    isLoading: true,
    
    chatsRed: [],
    
};


export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
      case SEND_MESSAGE: {
        //   console.log(action);
          return update(store, {
              chats: { $merge: { [action.chatId]: {
                  title: store.chats[action.chatId].title,
                  messageList: [...store.chats[action.chatId].messageList, action.messageId]
              } } },
          });
      }

      case SUCCESS_CHATS_LOADING: {
        return update(store, {
            chats: { $set: action.payload.entities.chats },
            isLoading: { $set: false },
        });
    }


      case ADD_CHAT: {
          const chatId = Object.keys(store.chats).length + 1;
          return update(store, {
              chats: { $merge: { [chatId]: { title: action.title, messageList: [] } } }
          });
      }
        case HIGHLIGHT_CHAT: {
            const chatId = Number(action.chatId);
            return update(store, {
                chatsRed: {$set: [...store.chatsRed, chatId]  }
            });
        }
        case UNHIGHLIGHT_CHAT: {
            const chatId = Number(action.chatId);
            const chatsRed = [...store.chatsRed];
            delete chatsRed[chatsRed.indexOf(chatId)];
            return update(store, {
                chatsRed: {$set: chatsRed  }
            });
        }


      default:
          return store;
  }
}
