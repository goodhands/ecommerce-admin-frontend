<template>
  <div id="app">

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data: function(){
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    login(){
      axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {
        axios.post('http://localhost:8000/auth/v1/login', {
          email: "upshoottech@outlook.com",
          password: "hicui4cu235"
        }).then(res => {
          console.log(res);
        }).finally(() => {
          this.authenticatedUser();
        })
      });
    },

    authenticatedUser(){
      //set headers
      // axios.post('http://127.0.0.1:8000/v1/api/login', {
      //   email: this.email,
      //   password: this.password
      // }).then(res => console.log(res));

      // axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
      //     // Login...
      //     console.log(response);
      // });

      axios.get('http://localhost:8000/api/v1/user').then(res => console.log(res));
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
