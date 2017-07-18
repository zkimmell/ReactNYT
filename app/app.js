var React = require("react");
var ReactDOM = require("react-dom");

var routes = require("./config/routes");

// Renders contents according to route page in div app of index.html
ReactDOM.render(routes, document.getElementById("app"));
