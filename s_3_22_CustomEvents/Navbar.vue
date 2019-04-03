<template>
<nav>
  <h3>MENU:</h3>
 <ul>
   <li><a href="#">Home </a></li>
   <li><a href="#">About</a></li>
   <li><a href="#">Contact</a></li>
 </ul>
</nav>

</template>


<script>
  export default {
    name: 'Navbar',
    data(){
      return {

      }
    }
  }
</script>

<!--we could write
<style scoped> if we wouldn't like this style to be exported to the App.vue
  -->
<style>

nav {
  text-align: center;
}

nav ul {
  padding: 0;
}
nav li {
  display: inline-block;
  list-style-type: none;
  margin: 0;
}

a {
  color: white;
}
</style>
