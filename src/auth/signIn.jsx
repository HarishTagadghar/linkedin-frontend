import React from "react";
import { Redirect } from "react-router-dom";
import { authenticate, isAutheticated, signin } from "./helper/index";


export class signIn  extends React.Component {
    constructor(props){
        super(props);
    
        this.state={
            email:"",
            password:"",
            redirect:false
        }
    
    this.handleOnChange = this.handleOnChange.bind(this);
    this.submitApi = this.submitApi.bind(this);
    
    }
    
    handleOnChange(event) {
        console.log(event.target.value);
        this.setState({[event.target.name]:event.target.value})
    }
    async submitApi (event) {
        const user = this.state
        try {
            const data = await signin(user)
            await authenticate(data)
            const state = this.state
            state.email = ""
            state.password = ""
            state.redirect = true
            this.setState(() => ({ state}))
            console.log("login success" , data);

           
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return(
          
            <div>
                {this.state.redirect ? <Redirect to="/post" /> : ""}
                <input type="email"
                 placeholder="Email"
                 name="email" 
                 value={this.state.email}
                 onChange={this.handleOnChange} />
    
                 <input type="password" 
                 name="password"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.handleOnChange} />
    
                 <button onClick={this.submitApi} >SignIn</button>
            </div>
         
        )
    }
    
    
}


