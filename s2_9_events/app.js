new Vue ({
  el: '#app',
  data:{
    title: 'Becoming a vue ninja',
    wage: 10
  },
  methods: {
    changeWage(amount){
      this.wage +=amount
    }
    }
  }
)
