<template>
  <div v-if="!userIsLoggedIn">
    <h2 v-if="$route.name !== 'Login' || $route.name !== 'Register'">User logged out, <router-link to="/login">login</router-link> to continue</h2>
    <router-view name="auth"/>
  </div>
  <div class="flex flex-row mx-20 2xl:mx-56" v-else>
    <!-- LEFT SIDEBAR -->
    <div id="nav" class="border-gray-300 border-l-1 flex flex-col h-screen px-2 sticky top-0 w-2/12">
      <router-link to="/" class="block mb-10">Logo</router-link>

      <div class="nav-menu flex flex-col justify-evenly">
        <nav-items></nav-items>
      </div>

      <router-link class="absolute bottom-5" to="/about">Your store</router-link>
    </div>
    <!-- MAIN CONTENT -->
    <div id="main" class="bg-gray-100 border-gray-300 border-l-1 border-r-1 flex flex-row justify-between px-10 py-10 w-10/12">
      <div class="flex flex-col justify-between w-10/12">
        <h2 class="font-bold text-3xl font-heading">
          {{ $route.name }}
        </h2>
        <router-view name="default"/>
      </div>
      <!-- RIGHT SIDEBAR -->
      <div class="sticky top-0 flex flex-col items-center w-3/12">
        <Search/>
          <div id="sidebar" class="my-10 p-5 w-full flex flex-col h-screen">
              <p class="font-heading text-center text-sm mb-5">Good morning Samuel</p>
              <span class="block text-center text-gray-300">Your store activity</span>
              <h2 class="text-center text-3xl mb-5 font-heading font-extrabold">₦125,002.10</h2>
              <div class="card"></div>
          </div>
      </div>
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
      // return this.$store.getters.user.auth;
      return false
    }
  },
  mounted(){
    this.$store.commit('user/setAuthStatus', this.storage.getItem('auth'));
    this.$store.commit('store/setStore', JSON.parse(this.storage.getItem('store')), {root: true});
  },
  components:{
    NavItems,         
    Search,
  },

}
</script>