module.exports = {
  paths:{
    watched: ['app','views']
  },
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },
  plugins:{
    autoReload: true,
  }
}

