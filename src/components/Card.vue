<template>
  <div class="card">
    {{context}}
  </div>
</template>

<script>
export default {
name:"card",
props:['context']
}
</script>

<style>
.card{
   box-shadow: 3px 3px 4px #1f2a4e, -3px -3px 4px #66739a;
    padding: 2px 10px;
    margin-top: 3rem;
    border-radius: 0.3rem;
    color: #290721;
    font-family: monospace;
    font-size: 1.2rem;
    text-align: center;
    width:80vw;
    animation: fade 1s forwards;
}

.card:hover{
  background-color: cadetblue;
}
@keyframes fade {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>