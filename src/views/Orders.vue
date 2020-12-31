<template>
    <div class="my-10">
        <Table :headings="headings" :options="options" :data="data">
        </Table>
    </div>
</template>

<script>
import Table from '@/components/Table/Table.vue'
import Select from '@/components/Menu/Select.vue';
import Filter from '@/components/Table/Filter.vue';

export default {
    data() {
        return {
            data:[
                { order: '1224', products: [{name: 'Mask'}, {name: 'Shoe'}], customer: [{name:'Samuel'}], created_at: '2020-12-02' }
            ],
            headings: [
                {
                    key: 'order',
                    label: 'OrderID'
                },
                {
                    key: 'products',
                    label: 'Product'
                },
                {
                    key: 'created_at',
                    label: 'Date'
                },
                {
                    key: 'customer',
                    label: 'Customer'
                }
            ],
            options:[
                {colspan:1, content: Select},
                {colspan: 1}, 
                {colspan: 3, content: Filter}
            ]
        }
    },
    components:{
        Table
    }
}
</script>