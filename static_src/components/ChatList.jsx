// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import SendIcon from '@material-ui/icons/Send'; 

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

// export default function SimpleList() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <List component="nav" aria-label="main mailbox folders">
//         <ListItem button>
//           <ListItemIcon>
//             <SendIcon />
//           </ListItemIcon>
//           <ListItemText primary="Chat1" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <SendIcon />
//           </ListItemIcon>
//           <ListItemText primary="Chat2" />
//         </ListItem>
//       </List>
//       <ListItem button>
//         <ListItemIcon>
//           <SendIcon />
//         </ListItemIcon>
//         <ListItemText primary="Chat3" />
//       </ListItem>
      
//     </div>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';


export default class ChatList extends React.Component {
   render() {
       return (
           <List>
               <Link to="/chat/1/">
                   <ListItem primaryText="Chat 1" leftIcon={<ContentSend />} />
               </Link>
               <Link to="/chat/2/">
                   <ListItem primaryText="Chat 2" leftIcon={<ContentSend />} />
               </Link>
               <Link to="/chat/3/">
                   <ListItem primaryText="Chat 3" leftIcon={<ContentSend />} />
               </Link>
           </List>
       )
   }
}
