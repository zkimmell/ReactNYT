module.exports = {

  entry: "./app/app.js",

  output: {
    filename: "public/bundle.js"
  },
  //Descrbe transformations
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        include: /app/,
        loader: "babel",
        query: {
          // Specific transformations 
          presets: ["react", "es2015"]
        }
      }
    ]
  },
};
