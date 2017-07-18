var React = require("react");

var router = require("react-router");

// Route component
var Route = router.Route;

// Catch-all route
var IndexRoute = router.IndexRoute;

// Router component
var Router = router.Router;

// Include browserHistory prop to configure client side routing
var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../components/Main");
var Search = require("../components/Search");
var Saved = require("../components/Saved");


// Export Routes
module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      // If user selects Search or Saved show the appropriate component 
      <Route path="Search" component={Search} />
      <Route path="Saved" component={Saved} />

      //If user selects any other path give Home Route
      <IndexRoute component={Search} />

    </Route>
  </Router>
);
