<template>
    <div class="pt-10">
        <section id="intro" class="py-5">
            <div class="flex flex-row space-x-2">
                <card size="w-4/12">
                    <span class="text-muted text-gray-500 block mb-5 text-sm">Total sales</span>
                    <div>
                        <span class="flex flex-row justify-between items-center">
                            <h5>₦130,000</h5>
                            <span class="text-muted text-gray-400 text-sm py-3">Sales this week</span>
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
                <card size="w-4/12">
                    <span class="text-muted text-gray-500 block mb-5 text-sm">Total sales</span>
                    <div>
                        <span class="flex flex-row justify-between items-center">
                            <h5>₦130,000</h5>
                            <span class="text-muted text-gray-400 text-sm py-3">Sales this week</span>
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
                <card size="w-4/12">
                    <span class="text-muted text-gray-500 block mb-5 text-sm">Total sales</span>
                    <div>
                        <span class="flex flex-row justify-between items-center">
                            <h5>₦130,000</h5>
                            <span class="text-muted text-gray-400 text-sm py-3">Sales this week</span>
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

export default {
    data: function(){
        return {
            page: 'Home'
        }
    },
    components:{
        Card
    }
}
</script>