<template>
  <div v-if="!userIsLoggedIn">
    <div class="w-full bg-black h-10"></div>
    <router-view name="auth"/>
  </div>
  <div id="app" class="absolute flex flex-row w-full" v-else>
    <div id="nav" class="w-2/12 h-screen px-2 flex flex-col justify-between my-10">
      <router-link to="/" class="block">Logo</router-link>

      <div class="nav-menu flex flex-col justify-evenly">
        <nav-items></nav-items>
      </div>

      <router-link to="/about">Your store</router-link>
    </div>
    <div id="main" class="px-10 w-8/12 bg-gray-100 border-gray-300 border-l-1 border-r-1 py-10">
      <div class="flex flex-row justify-between">
        <h2 class="font-bold text-3xl font-heading">
          {{ $route.name }}
        </h2>
          <Search/>
      </div>
      <router-view name="default"/>
    </div>
    <div id="sidebar" class="my-10 p-5 w-2/12 flex flex-col h-screen">
      <p class="font-heading text-center text-sm mb-5">Good morning Samuel</p>
      <span class="block text-center text-gray-300">Your store activity</span>
      <h2 class="text-center text-3xl mb-5 font-heading font-extrabold">₦125,002.10</h2>
      
      <div class="card"></div>
    </div>
  </div>
</template>

<script>
import NavItems from './components/Nav/Items.vue';
import Search from '@/components/Search.vue';

export default {
  data:function(){
    return {
      storage: window.localStorage,
    }
  },

  computed:{
    userIsLoggedIn(){
      return this.$store.getters.user.auth;
    }
  },
  mounted(){
    this.$store.commit('user/setAuthStatus', this.storage.getItem('auth'));
  },
  components:{
    NavItems,         
    Search

  }  
}
</script>