
import "./App.css"
import NavigationBar from "./component/NavigationBar"
import Intro from "./component/Intro";
import Trending from "./component/Trending"
import Superhero from "./component/Superhero";

import "./style/landingPage.css"
function App() {
  return (
    <div>
      <div className="myBG">
      <NavigationBar />
      <Intro />
      </div>

       <div className="trending">
        <Trending />
       </div>

        <div className="superhero">
          <Superhero/>
        </div>
    </div>
  );
}

export default App


