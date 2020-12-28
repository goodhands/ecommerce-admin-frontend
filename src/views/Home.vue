<template>
    <div class="pt-10">
        <section id="intro" class="py-5">
            <div class="flex flex-row space-x-2">
                <card size="w-4/12" :busy="Object.keys(this.weeklyStats).length == 0">
                    <span class="text-muted text-gray-500 block mb-5 text-sm">Sales</span>
                    <div>
                        <span class="flex flex-row justify-between items-center">
                            <h5 v-money="this.weeklyStats.sales_total"></h5>
                            <span class="text-muted text-gray-400 text-sm py-3">Sales this week</span>
                        </span>
                        <hr>
                        <span class="flex flex-row justify-between items-center py-3">
                            <h5 class="text-gray-400 text-sm" v-if="this.weeklyStats.new_orders > 0">
                                {{ this.weeklyStats.new_orders }} new orders
                            </h5>
                            <small v-else class="text-gray-400 text-sm">No orders yet</small>
                            <a :href="this.weeklyStats.sales_link" class="text-blue-300 text-sm">View orders ></a>
                        </span>
                    </div>
                </card>
                <card size="w-4/12" :busy="Object.keys(this.weeklyStats).length == 0">
                    <span class="text-muted text-gray-500 block mb-5 text-sm">Customers</span>
                    <div>
                        <span class="flex flex-row justify-between items-center">
                            <h5>+{{ this.weeklyStats.customers }}</h5>
                            <span class="text-muted text-gray-400 text-sm py-3">
                                30% increase this week
                            </span>
                        </span>
                        <hr>
                        <span class="flex flex-row justify-between items-center text-muted text-gray-400 text-sm py-3">
                            See all customers
                            <a href="#" class="text-blue-300">View orders ></a>
                        </span>
                    </div>
                </card>
                <card size="w-4/12" :busy="Object.keys(this.weeklyStats).length == 0">
                    <span class="text-muted text-gray-500 block mb-5 text-sm">Visits</span>
                    <div>
                        <span class="flex flex-row justify-between items-center">
                            <h5>30.000</h5>
                            <span class="text-muted text-gray-400 text-sm py-3">Visits in the past week</span>
                        </span>
                        <!-- If there are no orders -->
                        <!-- <span class="text-muted text-gray-400 text-sm py-3">No sales yet</span> -->
                        <hr>
                        <span class="flex flex-row justify-between items-center text-muted text-gray-400 text-sm py-3">
                            No orders yet
                            <a href="#" class="text-blue-300">View orders ></a>
                        </span>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Dashboard from '../../src/services/Dashboard';

export default {
    data: function(){
        return {
            page: 'Home',
            analytics: {
                labels: ["Jan", "Feb", "Mar"],
                datasets: [
                    {
                        label: "2015",
                        data: [12,34,2,4,45,34,2]
                    }
                ]
            },
            weeklyStats: [],
            
        }
    },
    
    components:{
        Card
    },

    methods:{
        loadWeeklyStats(){
            Dashboard.getWeeklyStats().then(response => {
                this.weeklyStats = response.data;
            }).catch(err => { console.log(err) })
        }
    },
    computed:{
    },
    mounted(){
        this.loadWeeklyStats();
    }
}

</script>