<template>
    <div class="pt-10">
        <section id="intro">
            <analytics-cards></analytics-cards>
        </section>
        <!-- To do section -->
        <section id="todo" class="flex flex-row justify-evenly space-x-2">
            <card name="notification.orders" class="w-6/12">
                <span class="text-muted">2 orders are expected to deliver tomorrow</span>
                <h2 class="font-heading flex flex-row items-center">
                    3 new pending orders
                </h2>
                <ul class="py-5 space-y-1">
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
            </card>
            <!-- Most viewed products -->
            <card  name="notification.productViews" class="w-6/12 p-4">
                <div class="header mb-4">
                    <span class="text-muted">Over the past 7 days</span>
                    <h2 class="font-heading">These products were viewed the most</h2>
                    <p></p>
                </div>
                <MostViewedProducts/>
            </card>
        </section>
        <section class="flex flex-row justify-between space-x-2">
            <card name="notification.completeSetup" class="w-6/12 py-5">
                <span class="text-muted">Improve your store's visibility by completing this checklist</span>
                <h2 class="font-heading">Finish setting up your store</h2>
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
            <card name="notification.customizeTheme" class="w-6/12 py-5">
                <span class="text-muted">Improve your store's visibility by completing this checklist</span>
                <h2 class="font-heading">Customize your store theme</h2>
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