Vue = require 'vue'
App = require './App.vue'
xhr = require 'xhr'

new Vue
  el: '#app'
  render: (h) -> h(App)
