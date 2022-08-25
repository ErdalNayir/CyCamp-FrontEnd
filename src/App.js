import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routedetails from "./components/routedetails";
import Landing from "./components/landing";
import Homepage from "./components/homepage";
import Forgettenpassword from "./components/forgettenpassword";

import Userprofile from "./components/userprofile.js";

import Filterpage from "./components/filterpage";

import Error from "./components/error";
import Denemealani from "./services/denemeAlani";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/forgetpass" element={<Forgettenpassword />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/routedetails" element={<Routedetails />} />
          <Route path="/filterroute" element={<Filterpage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
