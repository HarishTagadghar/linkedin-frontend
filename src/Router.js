import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import { createPost } from "./post/createPost";
import { Posts } from "./post/posts";
import { signIn } from "./auth/signIn";
import { SignUp } from "./auth/singup";
import updatePost from "./post/updatePost"


export const Routes = () => {
    return (
      <BrowserRouter>
      
       
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signIn" exact component={signIn} />

          <Route path="/posts" exact component={Posts} />
          <Route path="/createPost" exact component={createPost} />
          <Route path="/post/:postId" exact component={updatePost} />
          </Switch>
        </BrowserRouter>
    )
}
