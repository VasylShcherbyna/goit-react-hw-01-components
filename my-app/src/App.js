import user from './components/social-profile/user.json';
import SocialProfile from './components/social-profile/SocialProfile.jsx';

function App() {
  return (
    <div className="App">
      <SocialProfile props={ user }/>
    </div>
  );
}

export default App;
