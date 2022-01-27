import { Component } from 'react';
import Signup from "./component/Signup.js"
import Login from "./component/Login.js"
import Post from "./component/Post.js"
import PasswordModal from "./component/PasswordModal"
import Withdrawal from "./component/Withdrawal"
import Root from "./component/Root"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
            <Routes>
              <Route path="/" exact={true} element={<Root />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/passwordModal" element={<PasswordModal />} />
              <Route path="/withdrawal" element={<Withdrawal />} />
              <Route path="/post" element={<Post />} />
            </Routes>
      </div>
    </Router>
  );
}

export default App;
