<template>
    <div class="pt-10">
        <section id="intro">
            <analytics-cards></analytics-cards>
        </section>
        <!-- To do section -->
        <section id="todo" class="flex flex-row justify-evenly space-x-2">
            <card class="w-6/12">
                <span class="text-gray-400 text-sm">2 orders are expected to deliver tomorrow</span>
                <h2 class="font-heading flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    3 new pending orders
                </h2>
                <ul class="py-5 space-y-1">
                    <li class="card flex flex-row justify-between items-center">
                        <strong class="text-sm">HP Elite book 1030 </strong>
                        <span class="text-sm" v-money="120000"></span>-<span class="text-sm">2d ago</span>
                        <router-link class="btn btn-primary" to="products">View</router-link>
                    </li>
                    <li class="card flex flex-row justify-between items-center">
                        <strong class="text-sm">Phone holder</strong>
                        <span class="text-sm" v-money="5000"></span>-<span class="text-sm">2d ago</span>
                        <router-link class="btn btn-primary" to="products">View</router-link>
                    </li>
                    <li class="card flex flex-row justify-between items-center">
                        <strong class="text-sm">Matching pyjamas...</strong>
                        <span class="text-sm" v-money="25000"></span>-<span class="text-sm">2d ago</span>
                        <router-link class="btn btn-primary" to="products">View</router-link>
                    </li>
                </ul>
            </card>
            <!-- Most viewed products -->
            <card class="w-6/12 p-4">
                <div class="header mb-4">
                    <span class="text-gray-400 text-sm">Over the past 7 days</span>
                    <h2 class="font-heading">These products were viewed the most</h2>
                </div>
                <MostViewedProducts/>
            </card>
        </section>
        <section>
            <card class="w-6/12 py-5">
                <h2>Finish setting up your store</h2>
                <span class="text-sm">Start making sales with your new store 🥂</span>
                <ul class="py-5 space-y-1">
                    <li class="card flex flex-row justify-between items-center">
                        Add up to 5 products
                        <router-link class="btn btn-primary" to="products">Add</router-link>
                    </li>
                    <li class="card flex flex-row justify-between items-center">
                        Connect a delivery provider
                        <router-link class="btn btn-primary" to="products">Add</router-link>
                    </li>
                    <li class="card flex flex-row justify-between items-center">
                        Tell your customers about your new store
                        <router-link class="btn btn-primary" to="products">Share</router-link>
                    </li>
                </ul>
            </card>
        </section>
    </div>
</template>

<script>
import AnalyticsCards from '@/components/Analytics/Cards.vue';
import Card from '@/components/Card.vue';
import MostViewedProducts from '@/components/Home/MostViewedProducts.vue';
// import Dashboard from '../../src/services/Dashboard';

export default {
    data: function(){
        return {
            page: 'Home',            
        }
    },
    
    components:{
        AnalyticsCards,
        Card,
        MostViewedProducts
    },

    computed:{
    },
}
</script>

<style lang="css">
    section{
        @apply py-5;
    }
</style>