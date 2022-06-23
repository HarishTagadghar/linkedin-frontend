import React  from "react";
import { Link } from "react-router-dom";
import { token, userId } from "../token";

import {deletePostApi, getMyPostsApi} from './helper/post'


export class Posts extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
        this.getPosts = this.getPosts.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

  

    async getPosts() {
       const posts = await getMyPostsApi(userId , token)
        const state = this.state
        state.posts= posts
        this.setState(() => ({state}))
    }
    async deletePost(postId) {
        const sdelete = await deletePostApi(postId , token)
            console.log(sdelete);
            this.getPosts()
    }
    componentDidMount() {
        this.getPosts()
    }
render(){
    return (
        <div style={{textAlign:"center"}}>
            <h1>posts</h1>
         
            {this.state.posts ? 
            this.state.posts.map((post , index) => {

            return(
                <div key={index} style={{margin:"0 0 10px 0"}}>
                    <h3>{index + 1}) ImageUrl : {post.imageUrl}</h3>
                    <p>Text : {post.text}</p>
                    <Link style={{marginRight:"20px"}} to={`/post/${post.postId}`}>UPDATE</Link>
                    <button onClick={() => {this.deletePost(post.postId)}}>DELETE</button>
                </div>
            )
            })
            
            : <h1>NO POST FOUND</h1>}
        </div>
    )
}
}