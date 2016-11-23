module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname, 
    filename: './public/bundle.js'
  }, 
  resolve: {
    root: __dirname,
    alias: {
      //where the fun stuff happens
      Main: 'app/components/Main.jsx',
      Navigation: 'app/components/Navigation.jsx', 
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
          //what we want this to do to our files
          //babel compile our files through react and es2015
        },
        test: /\.jsx?$/,
        //so the loader knows which files to get
        exclude: /(node_modules | bower_components)/
        // folders we don't want parsed
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};