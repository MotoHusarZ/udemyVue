new Vue ({
  el: '#app',
  data:{
    title: 'Becoming a vue ninja',
    name: 'Ryu'
  },
  methods: {
    updateName(eWhatever){
      //console.log(eWhatever.target.value)
      this.name = eWhatever.target.value
    }
  }
})
