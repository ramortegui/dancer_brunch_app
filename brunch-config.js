module.exports = {
  paths:{
    watched: ['app','views','lib']
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

