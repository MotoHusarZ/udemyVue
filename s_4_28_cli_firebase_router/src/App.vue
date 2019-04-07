<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c8ccd0;
  margin-top: 60px;
}

body {
  padding:5px 15px 15px 15px;
  font-size: 87.5%;
  font-weight: normal;
  /*color:#93A1AD;*/
  /*background: linear-gradient(#C0C0C0, #C0C0C0, #C0C0C0, #ADD8E6, #66CDAA);*/
  /*background: url("bkg-blu.jpg"); */
   background: #002B36;
   /*background: red;*/

}


</style>
