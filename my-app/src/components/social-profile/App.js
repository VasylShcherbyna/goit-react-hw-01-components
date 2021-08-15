import styles from "./profile.css";
import user from "./user.json";
import SocialProfile from "./SocialProfile.jsx";

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
    </div>
  );
}
