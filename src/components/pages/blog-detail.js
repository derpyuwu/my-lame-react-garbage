import React, { Component } from 'react';
import axios from 'axios';

export default class BlogDetail extends Component {
    constructor (props){
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {}
        };
    }

    componentDidMount() {
        this.getBlogItem()
    }

    getBlogItem() {
        axios.get(`https://derpyuwu.devcamp.space/portfolio/portfolio_blogs/${this.state
        .currentId}`
        ).then(response => {
            console.log("response", response);    
        }).catch(error => {
            console.log("getBlogItem error", error);
            
        })
    }

    render() {
        console.log("currentId", this.state.currentId);
        return (
            <div>
                <h1>Blog detail</h1>
            </div>
        );
    }
}