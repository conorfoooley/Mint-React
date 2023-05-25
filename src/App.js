import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

  

} from "react-router-dom";
import Mint1 from "./pages/Mint1";
import Mint2 from "./pages/Mint2";
import Mint2a from "./pages/Mint2a";
import Mint3 from "./pages/Mint3";

function App() {
  return (
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<Mint1 />} />
            <Route path="/mint2" element={<Mint2 />} />
            <Route path="/mint2a" element={<Mint2a />} />
            <Route path="/mint3" element={<Mint3 />} />
          </Routes>
        </Fragment>
      </Router>
    
  );
}

export default App;
