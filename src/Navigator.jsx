import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from "react-router-dom";
import Home from './Home';
import App from './App';
import Profile from './Profile';
import Bonus from './Bonus';
import Getstarted from './Getstarted';
import Search from "./Search";
const Navigator = () => {
  return (
    <div>
      <Router>
<Routes>
    <Route path="*" element={<App/>}/>
    <Route path="/Getstarted" element={<Getstarted/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/Bonus" element={<Bonus/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Search" element={<Search/>}/>
</Routes>
</Router>
    </div>
  )
}

export default Navigator