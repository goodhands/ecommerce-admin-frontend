<template>
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
                    <a :href="this.weeklyStats.customers_link" class="text-blue-300">View customers ></a>
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
                <hr>
                <span class="flex flex-row justify-between items-center text-muted text-gray-400 text-sm py-3">
                    Your store URL
                    <a href="#" class="text-blue-500">{{ "michtolam.store.com" }}</a>
                </span>
            </div>
        </card>
    </div> 
</template>

<script>
import Dashboard from '../../services/Dashboard'
import Card from '../../components/Card';

export default {
    data: function(){
        return {
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

    mounted(){
        this.loadWeeklyStats();
    }
}
</script>