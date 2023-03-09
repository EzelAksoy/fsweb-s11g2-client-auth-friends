import React from "react";
import { useSelector } from "react-redux";

function FriendsList() {
  const friends = useSelector((store) => store.friendslist);

  return (
    <div className="Friend">
      <p className="friend_başlık">FRIENDS LIST</p>
      {friends.map((friend) => (
        <p className="friends">
          -{friend.name}-{friend.email}
        </p>
      ))}
    </div>
  );
}

export default FriendsList;
