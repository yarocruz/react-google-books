import React from "react";
import Album from '../src/components/Album';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
      <div>
          <Router>
            <Album />
          </Router>
      </div>
    );
}

export default App;
