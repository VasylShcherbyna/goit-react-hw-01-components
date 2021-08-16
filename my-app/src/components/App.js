import styles from "./social-profile/profile.css";
import user from "./social-profile/user.json";
import SocialProfile from "./social-profile/SocialProfile.jsx";

import Statistic from "./Statistics/Statistic.jsx";
import StatisticalData from "./Statistics/statistical-data.json";
import StatisticalModule from "./Statistics/StatisticalModule.css";

import Friends from './FriendList/FriendList.jsx';
import FriendsData from './FriendList/friends.json';
import FriendsModule from './FriendList/Friends-module.css';

import Transactions from './TransactionHistory/TransactionHistory.jsx';
import TransactionsData from './TransactionHistory/transactions.json';
import TransactionsModule from "./TransactionHistory/Transactons-module.css";




export default function App() {
  return (
    <div className="App">
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" props={StatisticalData} />
      <Friends FriendList={FriendsData} />
      <Transactions items={TransactionsData} />
    </div>
  );
}
