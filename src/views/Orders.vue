<template>
    <div class="my-10">
        <DataTable :headings="headings" :options="options" :data="data" :filter="true" :slots="['order']">
            <template v-slot="{order}">
                <span class="bg-red-500">
                    {{ "#" + order }}
                </span>                   
            </template>
        </DataTable>
    </div>
</template>

<script>
import DataTable from '@/components/Table/Table.vue'
import Select from '@/components/Menu/Select.vue';
// import Filter from '@/components/Table/Filter.vue';

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
                {colspan: 1}
            ]
        }
    },
    components:{
        DataTable
    },
}
</script>