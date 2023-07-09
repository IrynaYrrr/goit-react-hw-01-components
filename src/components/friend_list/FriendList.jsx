import React from 'react';
import FriendListItem from './friend_list_item/FriendListItem';
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  )
}
