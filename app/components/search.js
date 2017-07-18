var React = require("react");

var Query = require("./search/Query");

var Results = require("./search/Results");

var helpers = require("../utils/helpers");


var Search = React.createClass({

  // Set initial state variables
  getInitialState: function() {
    return {
      results: {}
    };
  },

  // Function to be passed down into child components so they can change parent
  setQuery: function(newQuery, newStart, newEnd) {
    helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
      this.setState({ results: { docs: data.docs } });
    }.bind(this));
  },

  render: function() {
    console.log("Render Results", this.state.results);

    return (
      <div className="main-container">

        // Pass the setQuery function to enable Query to perform searches 
        <Query updateSearch={this.setQuery} />
  
        <Results results={this.state.results} />
      </div>
    );
  }
});


module.exports = Search;
