<template>
    <div class="flex items-center w-full flex-col justify-center h-screen">
        <div 
            class="bg-white rounded-sm h-full my-20 shadow-lg w-10/12 flex flex-row justify-evenly">
            <div class="border-gray-200 border-r-1 w-6/12 py-10 px-10">
                <h2 class="font-heading text-3xl font-bold">Welcome back!</h2>
                <h2 class="font-heading text-3xl font-bold">Login to your account.</h2>
                <form class="flex flex-col space-y-4 my-4 h-full" @keyup="user.errors.clear()" @submit.prevent="login" method="get">
                    <p class="text-lg text-red-500" v-if="user.errors.any()">
                        {{ user.errors.message() }}
                    </p>
                    <div class="flex flex-col">
                        <label for="email" class="font-bold cursor-pointer">Email</label>
                        <input type="email" id="email"
                            class="px-2 outline-none border h-10 rounded-sm"
                            :class="user.errors.has('email') ? 'border-red-500' : ''" v-model="user.email">
                        <span class="text-sm text-red-500" v-if="user.errors.has('email')">
                            {{ user.errors.get('email') }}
                        </span>
                    </div>
                    <div class="flex flex-col">
                        <label for="password" class="font-bold cursor-pointer">Password</label>
                        <input type="password" class="px-2 outline-none border h-10 rounded-sm" 
                                name="password" id="password" v-model="user.password">
                        <span class="text-sm text-red-500" v-if="user.errors.has('password')">
                            {{ user.errors.get('password') }}
                        </span>
                    </div>
                    <button type="submit" class="bg-green-300 shadow font-bold h-10 rounded">Login</button>
                </form>
            </div>
            <div class="border-gray-200 border-r-1 w-6/12">

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
            user: new Form({
                email: null,
                password: null,
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