new Vue ({
  el: '#app',
  data:{
    title: 'Becoming a vue ninja',
    name: 'Ryu',
    url: 'http://www.youtube.com',
    classes: ['one','two']

  },
  methods: {
    greet(time){
      return `hello there and good ${time}, ${this.name}`
    }
  }
})
