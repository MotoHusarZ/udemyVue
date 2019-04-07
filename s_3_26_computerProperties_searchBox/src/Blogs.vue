<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<template>
  <div class="blogs">
    <h2> Blogs </h2>
    <input type="text" v-model="searchTerm">
    <p>Her should be list:</p>
    <div v-for="post in filteredPosts" :key="post.id" >
    <!--  <div v-for="post in posts" :key="post.id" > -->
      <h3>{{ post.title}}</h3>
      <p> {{ post.body | snippet }}</p>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default{
    name: 'Blogs',
      data(){
        return {
            posts: [],
            searchTerm: ''
        }
      },
      methods:{

      },
      computed: {
        filteredPosts(){
          return this.posts.filter (post =>{
            return post.title.match(this.searchTerm)
          })
        }
      },

      created() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          console.log(response)
          this.posts = response.data
        }).catch(err => {
          console.log(err)
        })
      }
  }

  /* in case does doesn't run go with this:
  // F:\www\wamp64\www\vue\udemyVue\cli>npm install axios --save
  // path depends from your machine but the command you should run is in the folder where you have cli/page installed
  //  then run command
  // npm install axios --save */
</script>
