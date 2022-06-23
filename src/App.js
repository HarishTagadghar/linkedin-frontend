import "./App.css";
import { Link } from "react-router-dom";


import React from "react";
import { Posts } from "./post/posts";
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
       
 
          <Link to="/signIn"><button>signIn</button></Link>

        </header>
       
        <Link to="/posts"><button>Posts</button></Link>
        
        <Link to="/createPost"><button>Create Post</button></Link>
        

      </div>
    );
  }
}
export default App;
