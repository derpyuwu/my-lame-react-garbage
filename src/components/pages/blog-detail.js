import React, { Component } from 'react';
import ReactHtmlParser  from 'react-html-parser';

import BlogFeaturedImage from "../blog/blog-featured-image"

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
            this.setState ({
                blogItem: response.data.portfolio_blog
            })   
        }).catch(error => {
            console.log("getBlogItem error", error);
            
        })
    }

    render() {
        const {
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem

        return (
            <div className="blog-container">
                <div className="content-container">
                    <h1>{title}</h1>

                    <BlogFeaturedImage img={featured_image_url} />
                    <div className="content">
                        {ReactHtmlParser(content)}
                    </div>
                </div>
            </div>
        );
    }
}