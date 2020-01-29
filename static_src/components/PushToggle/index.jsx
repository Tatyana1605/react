import React from 'react';
import './styles.css';

export default class PushToggle extends React.Component {
   render() {
       return <div className="push">
           <img className="push__image" src="/static/build/images/push-off.png" alt="Push Notification"/>
       </div>
   }
}
