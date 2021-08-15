import styles from "../src/components/social-profile/profile.css";
import user from "./components/social-profile/user.json";
import SocialProfile from "./components/social-profile/SocialProfile.jsx";

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
