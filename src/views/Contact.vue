<template>
  <div class="container">
    <div class="social">
                  <div @click="play" class="cd a">
        {{ state }}
      </div>
     <a href="https://twitter.com/kromate_24" target="_blank" rel="noreferrer">
           <div class="cd twitter">
        Twitter
      </div>
     </a>
     <a href="https://kromate.hashnode.dev/" target="_blank" rel="noreferrer">
           <div class="cd github">
        Hashnode
      </div>
     </a>
     <a href="https://www.instagram.com/kromtech_24/" target="_blank" rel="noreferrer">
           <div class="cd instagram">
        Instagram
      </div>
     </a>
     <a href="https://github.com/kromate" target="_blank" rel="noreferrer">
           <div class="cd github">
        Github
      </div>
     </a>
     <a href="https://wa.me/2348146923944" target="_blank" rel="noreferrer">
           <div class="cd whatsapp">
        Whatsapp
      </div>
     </a>





    </div>
    <div class="form">

      <span>None of the fields are required (<i>You free to remain Anonymous</i>)😉</span>

      <form @submit.prevent="handleSubmit()" name="submit-to-google-sheet">
        <input placeholder="Name" type="text" name="Name" id="" />
        <input placeholder="Email" type="email" name="Email" id="" />
        <textarea placeholder="Message" name="Message" id="" cols="23" rows="5"> </textarea>

        <button id="btn" type="submit">{{ text }}</button>
      </form>
    </div>
  </div>
</template>

<script>
   const contact = new Audio();   
  contact.src = require('../assets/cont.aac');
  export default {

     data(){
      return{
        state:'Play',
        text:'Submit'
      }
    },

    methods: {
            play(){
        console.log('playingo')
        if(this.state == 'Play'){
          this.state = 'Pause'
          contact.play()
        }else{
           this.state = 'Play'
          contact.pause()
        }
      },
      handleSubmit() {
        const form = document.forms['submit-to-google-sheet'];
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxHtzgmNP5GGoomN1JUwX6UCWwqnEhiUGGwz4BnjYyNYV6PaT8/exec';

        document.querySelector('#btn').disabled = true;

        this.text = 'Sending';
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((response) => {
            this.text = 'Sent';
          })
          .catch((error) => {
            alert('Error!', error.message);
            document.querySelector('#btn').disabled = false;
            this.text = 'Submit';
          });
      }
    }
  };


</script>

<style scoped>
a{
  text-decoration:none
}
.a{
background-color:#394876;
margin-bottom: 2rem !important;
}
  button {
    box-shadow: 3px 3px 4px #1f2a4e, -3px -3px 4px #66739a;
    padding: 0.8rem;
    background-color: black;
    color: white;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    font-family: monospace;
  }
  button:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    display: block;
  }
  textarea {
    border-radius: 0.2rem;
    padding: 0.4rem;
    max-width: 60rem;
    border: none;
    outline: none;
    margin: 1.5rem;
    background-color: transparent;
    border-bottom: 1px solid black;
    transition: 0.3s linear;
  }
  textarea:focus {
    border-bottom: 1px solid white;
    background-color: rgba(255, 235, 205, 0.557);
  }
  input {
    border-radius: 0.2rem;
    padding: 0.4rem;
    max-width: 60rem;
    border: none;
    outline: none;
    margin: 1.5rem;
    background-color: transparent;
    border-bottom: 1px solid black;
    transition: 0.3s linear;
  }
  input:focus {
    border-bottom: 1px solid white;
    background-color: rgba(255, 235, 205, 0.557);
  }
  .form {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 2rem;
    background-color: #290721e1;
  }
  .cd {
    margin: 1.2rem 0rem;
    padding: 0.7rem;
    border-radius: 0.5rem;
    box-shadow: 3px 3px 4px #1f2a4e, -3px -3px 4px #66739a;
    cursor: pointer;
    transition: 1s linear;
  }
  .cd:hover {
    transform: scale(1.5);
  }
  .twitter {
    background-color: #00acee;
    color: white;
  }
  .instagram {
    background-color: #3f729b;
    color: white;
  }
  .facebook {
    background-color: #3b5998;
    color: white;
  }
  .github {
    background-color: black;
    color: white;
  }
  .whatsapp {
    background-color: #25d366;
    color: white;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid #290721;
    font-family: monospace;
    width: 100vw;
  }
  .social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #290721;
  }

  @media screen and (max-width: 680px) {
    .container {
      grid-template-columns: 1fr;
      width: 100vw;
    }
  }
</style>
