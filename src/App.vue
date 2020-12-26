<template>
  <div id="app" class="absolute flex flex-row w-full my-10 px-5">
    <div id="nav" class="w-2/12 border-r-2 border-gray-300 h-screen">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div id="main" class="px-10 w-10/12">
      <router-view/>
    </div>
  </div>
</template>