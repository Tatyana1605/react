// import React from 'react';
// import Avatar from 'material-ui/Avatar';
// import List from 'material-ui/List/List';
// import ListItem from 'material-ui/List/ListItem';

// import {
//   blue300,
//   indigo900,
//   orange200,
//   deepOrange300,
//   pink400,
//   purple500,
// } from 'material-ui/styles/colors';

// const style = {margin: 5};

// const Profile = () => (
//   <List>
//     <ListItem
//       disabled={true}
//       leftAvatar={
//         <Avatar src="img/1.jpg" />
//       }
//     >
      
//     </ListItem>
    
//     </List>
//     );

//     export default Profile ;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div  style={ {  padding: '20px' } }  >
      <Avatar alt="Remy Sharp" src="/static_src/components/profile/img/1.jpg" />
     
    </div>
  );
}