<template>
  <div id="app" class="absolute flex flex-row w-full my-10">
    <div id="nav" class="w-2/12 h-screen px-5 flex flex-col justify-between">
      <router-link to="/" class="block">Logo</router-link>

      <div class="nav-menu flex flex-col justify-evenly">
        <ul>
          <li>
            <router-link to="/" class="flex flex-row items-center text-lg font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Dashboard
            </router-link>
          </li>
          <li><router-link to="/orders">Orders</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
        </ul>
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