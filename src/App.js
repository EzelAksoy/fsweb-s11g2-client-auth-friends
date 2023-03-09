import { NavLink, Route, Link, Switch } from "react-router-dom";
import Login from "./Components/Login";
import AddFriend from "./Components/AddFriend";
import FriendsList from "./Components/FriendsLıst";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        {" "}
        <h1>FRIENDS DATABASE</h1>
        <nav>
          <Link to="/" class="nav_button">
            LOGIN.
          </Link>
          <Link to="/FRIENDLIST" class="nav_button">
            FRIENDLIST
          </Link>
          <Link to="/ADDFRIEND" class="nav_button">
            ADDFRIEND.
          </Link>
          <Link to="/LOGOUT" class="nav_button">
            LOGOUT
          </Link>
        </nav>
      </div>
      <div className="max-w-sm mx-auto">
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/FRIENDLIST" component={FriendsList}></Route>
          <Route path="/ADDFRIEND" component={AddFriend}></Route>
          <Route path="/LOGOUT">
            <h2>Çıkış İşlemleri</h2>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
