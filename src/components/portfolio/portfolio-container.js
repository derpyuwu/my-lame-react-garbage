import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: []
    };
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }
  getPortfolioItems() {
    axios
      .get('https://derpyuwu.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  portfolioItems() {

    return this.state.data.map(item => {
      // 
      return( 
      <PortfolioItem key={item.id} item={item} />
      );
    });
  }
  componentDidMount() {
    this.getPortfolioItems();
  }
  render() {
    if (this.state.isLoading) {
      return <div>Wait........ Well? Why arent you waiting? I told you to wait.. Jesus fuck dude why arent you waiting? Oh you are? .... Neat!</div>;
    }
    return (
      <div className="portfolio-items-wrapper">
        <button className="btn" onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button className="btn" onClick={() => this.handleFilter("Scheduling")}>
          Scheduling
        </button>
        <button className="btn" onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>

      {this.portfolioItems()}
      </div>
  
    );
  }
}