<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script lang="coffee">
module.exports =
  data: ->
    msg: 'Hello Vue 2.0!'
</script>
