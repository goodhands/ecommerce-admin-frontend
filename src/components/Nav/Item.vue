<template>
    <ul>
        <li v-for="item in items" v-bind:key="item.name">
            <router-link :to="item.url" class="nav-items text-sm">
                <span v-html="item.icon"></span>
                {{ item.name }}
            </router-link>
            <child v-if="item.children" :children="item.children"></child>
        </li>
    </ul>
</template>

<script>
import Child from '@/components/Nav/Child.vue';

export default {
    name: "NavItems",
    components:{
        Child
    },
    props: {
        items: {
            required: true,
            type: Array
        }
    }
}
</script>