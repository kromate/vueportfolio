<template>
  <div class="home">
    <div class="image">
    <img alt="Vue logo" src="../assets/k1.png" />
    <img alt="Vue logo" src="../assets/vue.png" />
    </div>

    <card class="cards" context="Welcome to my Vue.Js Portfolio, this portfolio was created in a day together with the react version and it's just a proof of concept that i can write both Vue and vue." />
    <card class="cards" context="Concerning Vue, i have solid knowledge on vuex, Vue-router, and most popular Vue-css frameworks (for quick design prototyping). Check my Github for more details." />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card
  }
};
</script>

<style >
.image{
  display: flex;
}
.cards{
  width:60vw ;
}
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
}
img{
  max-width: 192px;
  height: 192px;
}
body{
  height: 100vh;
}
</style>