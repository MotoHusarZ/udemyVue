<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<template>
  <div class="blogs">
    <h2> Blogs </h2>
    Her should be list:
    <div v-for="post in posts" :key="post.id" >
      <h3>{{ post.title}}</h3>
      <p> {{ post.body }}</p>


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


        }
      },
      methods:{

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
</script>
