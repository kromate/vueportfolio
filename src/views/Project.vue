<template>
  <div class="center">
<h1>This page is left blank intentionally</h1>

<div class="card">
  Calm down....
  let me explain
</div>
<div class="card">
So in order to keep this page always updated, i decided instead of hard coding the projects into the application why don't i redirect you to a more updated readme of all my Vue projects
<br>
Why this could have been achieved by an API and Markup (<i>The JAMstack way</i>),it's just extra work i wish not to do
</div>
<div class="glow">
  <div class="card a">
  <a href="https://github.com/kromate/projects" target="_blank" rel="noreferrer">The Readme Link</a>
</div>
</div>

<div @click="play" class="card a">
  {{state}}
</div>

  </div>
</template>

<script>
  const project = new Audio()
  project.src = require('../assets/proj.aac') 

  export default {
    name:'project',
    data(){
      return{
        state:'Play'
      }
    },
    methods:{
      play(){
        console.log('playingo')
        if(this.state == 'Play'){
          this.state = 'Pause'
          project.play()
        }else{
           this.state = 'Play'
          project.pause()
        }
      }
    }
  }



  

 
</script>

<style scoped>
h1{
  text-align: center;
}
.center{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.a{
  width: fit-content;
  margin: 1rem !important;
  z-index: 5;
}
.glow{
  z-index: 2;
  margin: 2rem;
  border:1px solid #111e46;
  border-radius: 1rem;
  animation: glow 2.5s forwards  infinite  ;
}
@keyframes glow {
  from{
    color: #111e46;
    opacity: 0.5;
  }

  to{
    color: #8594c2;
    opacity: 1;
  }
}


</style>