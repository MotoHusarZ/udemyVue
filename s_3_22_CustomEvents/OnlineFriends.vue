<template>
  <div id="online-friends">
    <h2>Online Friends </h2>

    <div v-for="(friend, index) in friends" :key:="index">
        <span v-if="friend.online">{{ friend.name }}</span>

      </div>
      <br>
      Fooling around content: <br>
       {{ gorky }} <br> {{ pureText }}
  </div>
</template>


<script>
export default {
  name: 'OnlineFriends',
  props:  ['friends' , 'gorky', 'pureText'],
  data() {
    return {


    }
  }
}

</script>

<style>

</style>
