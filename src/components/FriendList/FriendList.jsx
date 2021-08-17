import React from 'react';
import PropTypes from 'prop-types';

const Friends = ({ FriendList }) => {
    return (
    <ul class="friend-list">
       { FriendList.map(Friend =>
        <li class="itemFrends" key={Friend.id}>
               <span class={ Friend.isOnline ? 'statusOnline' : 'statusOffline'}></span> 
  <img class="avatar" src={Friend.avatar} alt="картинка" width="48" />
               <p class="name">{Friend.name }</p>
           </li > 
          )
            }
    </ul>
    )
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
export default Friends