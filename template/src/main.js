const Vue = require('vue')
const App = require('./App.vue')

new Vue({ // eslint-disable-line
  el: '#app',
  render () {
    return this.$createElement(App)
  }
})
