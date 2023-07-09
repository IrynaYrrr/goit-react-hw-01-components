import React from 'react';
import css from "./FriendListItem.module.css";
import PropTypes from 'prop-types';


export default function FriendListItem({ avatar, name, isOnline }) {

  return (
    <li className={css.item}>
      {isOnline === true && (
        <span className={css.statusOnline}>{isOnline}</span>
      )}
      {isOnline === false && (
        <span className={css.statusOffline}>{isOnline}</span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" height="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }))
}
