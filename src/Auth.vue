<template>
  <div id="app" class="absolute flex flex-row w-full">
    <div id="nav" class="w-2/12 h-screen px-2 flex flex-col justify-between my-10">
      <router-link to="/" class="block">Logo</router-link>

      <div class="nav-menu flex flex-col justify-evenly">
        <!-- <nav-items></nav-items> -->
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
      <router-view name="auth"/>
    </div>
  </div>
</template>

<script>

export default {
  data:function(){
    return {

    }
  },
  components:{
  }  
}
</script>