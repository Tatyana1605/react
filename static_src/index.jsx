 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MessageField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



ReactDOM.render(
   // <MessageField messages={ messages } />,
   <MuiThemeProvider>

      <App />
   </MuiThemeProvider>,
   document.getElementById('root'),
);



