<template>
    <div class="bg-gray-200 flex items-center w-full flex-col justify-center h-screen">
        <div class="rounded-sm h-full my-20 shadow-lg w-10/12 flex flex-row justify-evenly">
            <div class="bg-white border-gray-200 border-r-1 w-6/12 py-10 px-10 flex flex-col justify-center h-full">
                <h2 class="font-heading text-3xl font-bold">Welcome back!</h2>
                <h2 class="font-heading text-3xl font-bold">Login to your shop.</h2>
                <form class="flex flex-col space-y-4 my-4" @keyup="user.errors.clear()" @submit.prevent="login" method="get">
                    <p class="text-lg text-red-500" v-if="user.errors.any()">
                        {{ user.errors.message() }}
                    </p>
                    <div class="flex flex-col">
                        <label for="store" class="font-bold cursor-pointer">
                            Store
                        </label>
                        <span class="text-muted">Enter your store unique name</span>
                        <div class="border flex h-10 items-center justify-between outline-none px-2 rounded-sm" :class="user.errors.has('store') ? 'border-red-500' : ''">
                            <input type="store" id="store" class="outline-none w-full" v-model="user.store" placeholder="Your store shortname">
                            <span>.shopbot.com</span>
                        </div>
                        <span class="text-sm text-red-500" v-if="user.errors.has('store')">
                            {{ user.errors.get('store') }}
                        </span>
                    </div>
                    <div class="flex flex-col">
                        <label for="email" class="font-bold cursor-pointer">Email</label>
                        <span class="text-muted">Enter your email address</span>
                        <input type="email" id="email"
                            class="px-2 outline-none border h-10 rounded-sm" placeholder="someone@email.com" :class="user.errors.has('email') ? 'border-red-500' : ''" v-model="user.email">
                        <span class="text-sm text-red-500" v-if="user.errors.has('email')">
                            {{ user.errors.get('email') }}
                        </span>
                    </div>
                    <div class="flex flex-col">
                        <label for="password" class="font-bold cursor-pointer">Password</label>
                        <span class="text-muted">Enter your password</span>
                        <input type="password" class="px-2 outline-none border h-10 rounded-sm" name="password" id="password" v-model="user.password">
                        <span class="text-sm text-red-500" v-if="user.errors.has('password')">
                            {{ user.errors.get('password') }}
                        </span>
                    </div>
                    <button type="submit" :disabled="user.errors.any() || user.data() == null" class="bg-green-300 shadow font-bold h-10 rounded">Login</button>
                    
                    <div>
                        <p class="text-center font-light">
                            Don't have an account yet? <router-link to="/register" class="font-bold">Register here.</router-link>
                        </p>
                    </div>
                </form>
            </div>
            <div class="border-gray-200 border-r-1 w-6/12" :style="{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}">

            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Form from '../../helpers/Form';

export default {
    data: function(){
        return {
            bg: 'https://images.unsplash.com/photo-1559087316-47ce212113b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80',
            user: new Form({
                email: null,
                password: null,
                store: null,
            }),
        }
    },
    computed: mapState({
        authenticatedUser: state => state.user
    }),

    methods: {
        login(){
            this.$store.dispatch('user/login', this.user)
        }
    }
}
</script>