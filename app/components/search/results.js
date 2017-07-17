var React = require("react");

var helpers = require("../../utils/helpers");

// Results Component Declaration
var Results = React.createClass({

  // Save states for the contents saved
  getInitialState: function() {
    return {
      title: "",
      url: "",
      pubdate: ""
    };
  },

  // Send the search terms to the parent Search component
  handleClick: function(item) {
    console.log("CLICKED");
    console.log(item);

    helpers.postSaved(item.headline.main, item.pub_date, item.web_url).then(function() {
      console.log(item.web_url);
    });
  },

  // Helper method for mapping through articles and outputting HTML
  renderArticles: function() {
    return this.props.results.docs.map(function(article, index) {

      // Each article reperesents a list group item with a known index
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{article.headline.main}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={article.web_url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Article</button>
                </a>

                
                 //Wrap this.handleClick with a function using an article as an argument
                <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Save</button>
              </span>
            </h3>
            <p>Date Published: {article.pub_date}</p>

          </li>

        </div>
      );

    }.bind(this));

  },

  // Helper method for rendering a container to hold all of the articles
  renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-list-alt"></i>
                    Results
                  </strong>
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
    // If no articles, render this HTML
    if (!this.props.results.docs) {
      return (
        <li className="list-group-item">
          <h3>
            <span>
              <em>Enter search terms to begin...</em>
            </span>
          </h3>
        </li>
      );
    }
    // If we have articles, return this.renderContainer() which returns all the articles
    return this.renderContainer();
  }
});

module.exports = Results;
