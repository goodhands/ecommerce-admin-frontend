<template>
    <div class="products-views">
        <h2 class="flex flex-row justify-between">
            Product 
            <span>{{ dateTime }}</span>
        </h2>
        <hr class="-left-0 -right-0 absolute">
        <span v-if="!busy && products.length == 0">Products with more views will appear here</span>
        <lists-flex :items="products" :busy="busy">
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
import Dashboard from '../../services/Dashboard';

export default {
    data() {
        return {
            products: [],
            busy: true,
            dateTime: null
        }
    },
    methods:{
        getMostViewedProducts(){
            Dashboard.getMostViewedProducts().then(response => {
                this.products = response.data.products;
                this.busy = false;
                this.dateTime = response.data.date;
            })
        }
    },
    mounted(){
        this.getMostViewedProducts();
    },
    components:{
        ListsFlex
    }
}
</script>