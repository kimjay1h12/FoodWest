import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from "react-router-dom";

import App from './App';

import Getstarted from './components/Getstarted';

const Navigator = () => {
  return (
    <div>
      <Router>
<Routes>
    <Route path="*" element={<App/>}/>
    <Route path="/Getstarted" element={<Getstarted/>}/>
   
</Routes>
</Router>
    </div>
  )
}

export default Navigator