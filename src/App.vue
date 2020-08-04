<template>
  <div id="app">
    <div id="nav" class="nav">
      <router-link class="card a" to="/">Home</router-link> |
      <router-link class="card a" to="/about">About</router-link> |
      <router-link class="card a" to="/project">projects</router-link> |
      <router-link class="card a" to="/contact">contact</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html{
  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
}
.a{
  width: fit-content !important;
  margin: 0 !important;
  // margin-bottom: 3rem !important;
  margin-left: 0.3rem !important;
  margin-right: 0.3rem !important;
}
body {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    background-color: #394876;
   
}

#app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #394876;
    transition: 1s ease-in-out;

}

#nav {
 
  padding-top: 20px;

  a {
    font-weight: bold;
    color: #58194a;
    text-decoration: none;

    &.router-link-exact-active {
      color: #290721;
    }
  }
}
.nav{
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   margin-bottom: 3rem;
}
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
</style>
