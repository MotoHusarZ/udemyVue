new Vue ({
  el: '#app',
  data:{
    title: 'Becoming a vue ninja',
    name: 'Ryu'
  },
  methods: {
    greet(time){
      return `hello there and good ${time}, ${this.name}`
    }
  }
})
