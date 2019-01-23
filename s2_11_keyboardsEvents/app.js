new Vue ({
  el: '#app',
  data:{
    title: 'Becoming a vue ninja',
    coords: {
      x: 0,
      y: 0
    }
  },
  methods: {
    logEvent(eWhatever){
      console.log(eWhatever)
    },
    logCoords(eWhatever){
        this.coords.x = eWhatever.offsetX
        this.coords.y = eWhatever.offsetY
    }
  }
})
