<template>
    <div>
        <lists-flex :items="firstThreeorders" :busy="orders.length < 1">
            <template slot-scope="{item}">    
                <span class="flex flex-col">
                    <span class="font-bold" v-money="item.total"></span>
                    <span class="text-sm">{{ item.customer.city +', '+ item.customer.state }}</span>
                </span>
                <span class="flex flex-col">
                    <p class="text-sm">
                        {{ item.products[0].name }}

                        <!-- if order has more than 1 product -->
                        <span v-if="item.products.length > 1">
                            {{  " and " + (item.products.length - 1) + " other(s)"  }}
                        </span>
                    </p>
                    <span class="text-sm">⌚ {{ item.created_at | dateAgo }}</span>
                </span>
                <router-link class="btn btn-primary" :to="{ name: 'Order', params: { id: item.id }}">View</router-link>
            </template>
        </lists-flex>
        <router-link :to="details_link" v-if="this.orders.length > 3" class="btn -mt-2 w-full block text-center">
            View all
        </router-link>
    </div>
</template>

<script>
import Dashboard from '@/services/Dashboard';
import ListsFlex from '../Lists/ListsFlex.vue';
import moment from 'moment';

export default {
    data() {
        return {
            orders: [],
            count: 0,
            details_link: null,
        }
    },
    filters:{
        dateAgo(value){
            return moment(value).fromNow();
        }
    },
    methods:{
        async getRecentOrders(){
            Dashboard.getRecentOrders().then( response => {
                this.orders = response.data.orders;
                this.count = response.data.orders_count;
                this.details_link = response.data.full_orders_link ? response.data.full_orders_link : null;
            }).catch(err => console.log(err));
        }
    },
    computed:{
        firstThreeorders(){
            if(this.orders.length > 3){
                return this.orders.slice(0, 3);
            }else{
                return this.orders;
            }
        }
    }, 
    mounted(){
        this.getRecentOrders();
    },
    components:{
        ListsFlex
    }
}
</script>