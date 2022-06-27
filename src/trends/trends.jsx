import React from "react";
import { getToken } from "../localStorage";
import { getTrendsApi } from "./helper/trends";

export class Trends extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            trends:[]
        }
    }
    async getTrends(){
        const trends = await getTrendsApi(getToken())
        let state = this.state
        state.trends = trends
        this.setState(()=> ({state}))
        console.log(this.state.trends);
    }
    componentDidMount(){
    this.getTrends()
    }
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h1>Trends</h1>
                {}
            </div>
        )
    }
}