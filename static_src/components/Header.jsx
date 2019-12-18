import React from 'react';
import PropTypes from "prop-types";
import TransitionsModal from "./profile/modal";

import './styles/styles.css';

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };
    render() {
        return (
            <div className="header"  >
              <span style={ { fontSize: '20px', padding: '20px' } }>Чат { this.props.chatId }</span>
              <TransitionsModal></TransitionsModal>
            </div>
        )
    }
}