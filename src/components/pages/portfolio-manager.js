import React, { Component } from "react";
import axios from "axios"
import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list"
import PortfolioForm from "../portfolio/portfolio-form";
export default class PortfolioManager extends Component {
    constructor() {
        super();
        this.state={
            portfolioItems: [],
            portfolioToEdit: {}
        }
        this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
        this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
        this.handleFormSubmisiionError = this.handleFormSubmisiionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
    }
    clearPortfolioToEdit() {
        this.setState({
            portfolioToEdit: {}
        })
    }
    handleEditClick(portfolioItem) {
        this.setState({
            portfolioToEdit: portfolioItem
        })
    }
    handleDeleteClick(portfolioItem) {
        axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, { withCredentials: true })
        .then(response => {
            this.setState({
                portfolioItems: this.state.portfolioItems.filter(item => {
                    return item.id !== portfolioItem.id;
                })
            })
            return response.data;
        })
        .catch(error => {
            console.log("Error at handleDeleteClick", error)
        })
    }
    handleEditFormSubmission() {
        this.getPortfolioItems();
    }
    handleNewFormSubmission(portfolioItem) {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        });
    }
    handleFormSubmisiionError(error) {
        console.log("handleFormSubmisiionError", error);
    }
    getPortfolioItems(){
        // https://lylerogers.devcamp.space/portfolio/portfolio_items
        // https://jordan.devcamp.space/portfolio/portfolio_items
        // https://lylerogers.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc    // this one makes the new portfolio items appear ontop of the list instead of the bottom because of the code we wrote after the question mark.
        axios.get("https://derpyuwu.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", { withCredentials: true
            }).then(response => {
                this.setState({
                    portfolioItems: [...response.data.portfolio_items] 
                })
                console.log("response from get portfolio items", response);
            }).catch(error => {
                console.log("error in getPortfolioItems", error);
            });
    }
componentDidMount() {
    this.getPortfolioItems();
}
    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                <PortfolioForm 
                    handleNewFormSubmission={this.handleNewFormSubmission}
                    handleEditFormSubmission={this.handleEditFormSubmission}
                    handleFormSubmisiionError={this.handleFormSubmisiionError}
                    clearPortfolioToEdit={this.clearPortfolioToEdit}
                    portfolioToEdit={this.state.portfolioToEdit}
                />
                </div>
                <div className="right-column">
                    <PortfolioSidebarList 
                        handleDeleteClick={this.handleDeleteClick}
                        data={this.state.portfolioItems}
                        handleEditClick={this.handleEditClick}
                    />
                </div>
            </div>
        )
    }
}