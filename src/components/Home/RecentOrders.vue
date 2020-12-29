<template>
    <ul class="py-5 space-y-1">
        <lists-flex
        <li class="card flex flex-row justify-between items-center">
            <span class="flex flex-col">
                <span class="font-bold" v-money="120000"></span>
                <span class="text-sm">Alimosho, Lagos</span>
            </span>
            <span class="flex flex-col">
                <p class="text-sm">HP Elite book 1030 </p>
                <span class="text-sm">x 1</span>
            </span>
            <router-link class="btn btn-primary" to="products">View</router-link>
        </li>
    </ul>
</template>

<script>
import ListsFlex from '../Lists/ListsFlex.vue';
export default {
    data() {
        return {
            orders: null,
        }
    },
    components:{
        ListsFlex
    }
}
</script>