<template>
    <div>
        <span class="text-muted" v-if="deliveringSoon.length > 0">
            {{ deliveringSoon.length }} order(s) are expected to deliver over the next 3 days
        </span>
        <span class="text-muted" v-else>
            {{ orders.length > 0 ? "You have some new orders" : "You do not have new orders at the moment" }}
        </span>
        <h2 class="font-heading flex flex-row items-center">
            {{ orders.length }} new pending orders
        </h2>
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
        <router-link :to="details_link" v-if="this.orders.length > 5" class="btn -mt-2 w-full block text-center">
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
            Dashboard.getRecentOrders().then((response) => {
                this.orders = response;
                this.count = response.length;
                this.details_link = response.length > 5 ? "/orders?filter[paid]=1&filter[fulfilled]=0&sort=-created_at" : null;
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    computed:{
        firstThreeorders(){
            if(this.orders.length > 5){
                return this.orders.slice(0, 5);
            }else{
                return this.orders;
            }
        },

        deliveringSoon(){
            const hasDeliveryDate = [];

            this.orders.map(order => {
                if(order.delivery_date){
                    const deliveryDate = new Date(order.delivery_date).getTime();
                    const daysRemaining = deliveryDate - new Date().getTime();
                    const daysRemainingToDay = Math.floor(daysRemaining / 86400000); //86400000 = miliseconds in a day

                    //only notify about deliveries due in 3 or less days
                    if(daysRemainingToDay <= 3){
                        //1 day or 2 days. English bro
                        hasDeliveryDate.push(daysRemainingToDay);
                    }
                }
            })

            return hasDeliveryDate;
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