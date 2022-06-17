import "./App.css";
import { Link } from "react-router-dom";


import React from "react";
export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>LinkedIn App</p>
         
          <Link to="/signup"><button>signup</button></Link>
       
 
          <button>Login</button>
        </header>
      </div>
    );
  }
}
export default App;
