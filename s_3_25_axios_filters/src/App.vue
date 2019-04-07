<template>
  <div id="app">
    {{ title }}
    <Navbar/>
    <Blogs/>

  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld'*/
// we could write inport Whatver but just to keep naming ok we use full name
import Navbar from './Navbar'
import Blogs from './Blogs'

export default {
  name: 'App',
  components: {
    /*HelloWorld,*/
    Navbar,
    Blogs
    /*if above name wouldn't be the same as import then we should use something like this
    Navbar: Whatever
      but as we use the same naming we can just use Navbar */
  },
  data (){
    return{
      title: 'my first Vue app CLI',
      emilTest: "this is emil test",

    }
  },
  methods: {
      }
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
