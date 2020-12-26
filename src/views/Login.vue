<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <form @submit.prevent="login" method="get">
            <input type="email" name="email" id="" v-model="email">
            <input type="password" name="password" id="" v-model="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>