import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import App from './App';
import Profile from './Profile';

import Getstarted from './Getstarted';
const Navigator = () => {
  return (
    <div>
      <Router>
<Routes>
    <Route path="*" element={<App/>}/>
    <Route path="/Getstarted" element={<Getstarted/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/Home" element={<Home/>}/>
</Routes>
</Router>
    </div>
  )
}

export default Navigator