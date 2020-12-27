<template>
  <div id="app" class="absolute flex flex-row w-full my-10">
    <div id="nav" class="w-2/12 h-screen px-5 flex flex-col justify-between">
      <router-link to="/" class="block">Logo</router-link>

      <div class="nav-menu flex flex-col justify-evenly">
        <nav-items></nav-items>
      </div>

      <router-link to="/about">Your store</router-link>
    </div>
    <div id="main" class="px-10 w-8/12 border-gray-300 border-l-1 border-r-1 ">
      <router-view/>
    </div>
    <div id="sidebar" class="px-5 w-2/12">
      <h2 class="text-center">$125,002.10</h2>
    </div>
  </div>
</template>

<script>
import NavItems from './components/Nav/Items.vue';

export default {
  data:function(){
    return {

    }
  },
  components:{
    NavItems
  }  
}
</script>