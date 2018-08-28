import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faSearch,
  faPlus,
);

const channelList = (
  <li className="Header__channelLists__list">
    <button className="Header__channelLists__list__button">
    <FontAwesomeIcon icon={ [ 'fab', 'slideshare' ] } />
    </button>
  </li>
);

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <button className="Header__postButton">
          <FontAwesomeIcon icon={ [ 'fab', 'slack-hash' ] } />
        </button>
        <button className="Header__searchButton">
          <FontAwesomeIcon icon={ faSearch } />
        </button>
        <ul className="Header__channelLists">
          { channelList }
          { channelList }
          { channelList }
        </ul>
        <button className="Header__addChannelButton">
          <FontAwesomeIcon icon={ faPlus } />
        </button>
      </header>
    );
  }
}
