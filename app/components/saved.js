var React = require("react");

var helpers = require("../utils/helpers");

var Main = React.createClass({

  getInitialState: function() {
    return { savedArticles: "" };
  },

  // When component mounts, get all saved articles from db
  componentDidMount: function() {
    helpers.getSaved().then(function(articleData) {
      this.setState({ savedArticles: articleData.data });
      console.log("saved results", articleData.data);
    }.bind(this));
  },

  // Delete saved articles from db
  handleClick: function(item) {
    console.log("CLICKED");
    console.log(item);

    helpers.deleteSaved(item.title, item.date, item.url).then(function() {

      // Get revised list
      helpers.getSaved().then(function(articleData) {
        this.setState({ savedArticles: articleData.data });
        console.log("saved results", articleData.data);
      }.bind(this));

    }.bind(this));
  },
  // helper method for rendering HTML when there are no saved articles
  renderEmpty: function() {
    return (
      <li className="list-group-item">
        <h3>
          <span>
            <em>Save your first article...</em>
          </span>
        </h3>
      </li>
    );
  },

  // helper method for mapping through articles and outputting HTML
  renderArticles: function() {
    return this.state.savedArticles.map(function(article, index) {

      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{article.title}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={article.url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Article</button>
                </a>
                <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Delete</button>
              </span>
            </h3>
            <p>Date Published: {article.date}</p>
          </li>
        </div>
      );
    }.bind(this));
  },

  // helper method for rendering a container and all of the articles inside
  renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderArticles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
 
  render: function() {
    //If no articles saved 
    if (!this.state.savedArticles) {
      return this.renderEmpty();
    }
    // Return saved articles if we have them
    return this.renderContainer();
  }
});

module.exports = Main;
