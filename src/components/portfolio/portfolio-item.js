import React, { Component } from "react";

export default class PortfolioItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      PortfolioItemClass:""
    };
  }

  handleMouseEnter() {
    this.setState({PortfolioItemClass: "image-blur"})

  }

  handleMouseLeave() {
    this.setState({PortfolioItemClass: ""})
  }

  render(){
    const { id, description, thumb_image_url, logo_url } = this.props.item;
    return (
      <div className="portfolio-item-wrapper"
      onMouseEnter={() => this.handleMouseEnter()}
      onMouseLeave={() => this.handleMouseLeave()}
      >
        <div
          className={"portfolio-image-background " + this.state.PortfolioItemClass}
          style={{
            backgroundImage: "url(" + thumb_image_url + ")"
          }} 
        />
        <div className="image-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} />
          </div>
          <div className="subtitle">{description}</div>
        </div>
      </div>
    );
  }
}