<template>
  <div id="app" class="absolute flex flex-row w-full my-10">
    <div id="nav" class="w-2/12 h-screen px-5">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div id="main" class="px-10 w-8/12 border-gray-300 border-l-1 border-r-1 ">
      <router-view/>
    </div>
    <div id="sidebar" class="px-5 w-2/12">
      <h2 class="text-center">$125,002.10</h2>
    </div>
  </div>
</template>