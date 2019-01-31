<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    {{ title }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data (){
    return{
      title: 'my first Vue app CLI'
    }
  },
  components: {
    HelloWorld
  },

}
</script>

<style>
body {
  text-align: center;
  padding:5px 15px 15px 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 87.5%;
  font-weight: normal;
  color: #c8ccd0;

  /*color:#93A1AD;*/
  /*background: linear-gradient(#C0C0C0, #C0C0C0, #C0C0C0, #ADD8E6, #66CDAA);*/
  /*background: url("bkg-blu.jpg"); */
   background: #002B36;
   /*background: red;*/

}

</style>
