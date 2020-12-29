<template>
    <div class="products-views">
        <h2 class="flex flex-row justify-between">
            Product 
            <span>Dec 12 - 24</span>
        </h2>
        <hr class="-left-0 -right-0 absolute">
        <lists-flex :items="products" :busy="products.length < 1">
            <template slot-scope="{item}">    
                <div class="flex flex-row space-x-2">
                    <img class="block h-5 w-5" :src="item.picture" alt="">
                    <strong class="text-sm">
                    <router-link to="/products/item">{{ item.name }}</router-link>
                    </strong>
                </div>
                <span>{{ item.views }} views</span>
            </template>
        </lists-flex>
    </div>
</template>

<script>
import ListsFlex from '@/components/Lists/ListsFlex.vue';

export default {
    data() {
        return {
            products: [
                { name: "Shoes", picture: "pic.png", views: 39},
                { name: "Bag", picture: "pic.png", views: 19},
                { name: "Cloth", picture: "pic.png", views: 30},
            ]
        }
    },
    components:{
        ListsFlex
    }
}
</script>