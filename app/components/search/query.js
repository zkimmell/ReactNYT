var React = require("react");

// Query Component Declaration
var Query = React.createClass({

  // Set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      search: "",
      start: "",
      end: ""
    };
  },

  // Register any change in textbox
  handleChange: function(event) {
    console.log("TEXT CHANGED");

    // Create syntax to capture any change in text to the query terms (pre-search).
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // Send the search terms to the parent Search component
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("CLICKED");
    this.props.updateSearch(this.state.search, this.state.start, this.state.end);
  },

  // Render the Query component
  render: function() {

    return (
      <div className="main-container">

        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-newspaper-o" aria-hidden="true"></i> Query
                  </strong>
                </h1>
              </div>
              <div className="panel-body">

                //Associate the text-box inputs with the state values
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4 className=""><strong>Topic</strong></h4>
                    <input
                      type="text"
                      value={this.state.search}
                      className="form-control"
                      id="search"
                      onChange={this.handleChange}
                      required
                    />

                    <h4><strong>Start Year</strong></h4>
                    <input
                      type="number"
                      value={this.state.start}
                      className="form-control"
                      id="start"
                      onChange={this.handleChange}
                      required
                    />

                    <h4><strong>End Year</strong></h4>

                    <input
                      type="number"
                      value={this.state.end}
                      className="form-control"
                      id="end"
                      onChange={this.handleChange}
                      required
                    />

                  </div>

                  //create the onClick event that triggers the HandleSubmit
                  <div className="pull-right">
                    <button
                      type="submit"
                      className="btn btn-danger"
                    >
                      <h4>Submit</h4>
                    </button>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});


module.exports = Query;
