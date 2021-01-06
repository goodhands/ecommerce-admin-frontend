<template>
    <div class="my-10">
        <DataTable :headings="headings" :options="options" :data="data" :filters="filters">
            <template v-slot:media_library={media_library}>
                <div class="flex flex-row items-center justify-between space-x-1">
                    <img :src="media" v-for="media in (media_library.slice(0, 2))" :key="media"
                        class="w-10 h-auto rounded" alt="">
                </div>
            </template>
        </DataTable>
    </div>
</template>

<script>
import ProductService from '../services/ProductService'
import DataTable from '@/components/Table/Table';

export default {
    data: function () {
        return {
            headings: [
                {
                    key: 'media_library',
                    label: ''
                },
                {
                    key: 'name',
                    label: 'Name'
                },
                {
                    key: 'price',
                    label: 'Price',
                    type: 'money'
                },
                {
                    key: 'status',
                    label: 'Status',
                    type: 'status'
                },
                {
                    key: 'created_at',
                    label: 'Date',
                    type: 'date'
                },
                {
                    key: 'stock',
                    label: 'Stock'
                }
            ],
            options:[],
            data: [],
            filters:[
                {
                    active: true,
                    label: 'All',
                    query: {}
                },
                {
                    active: true,
                    label: 'Published',
                    query: {status: 'published'}
                },
                {   
                    active: true,
                    label: 'Draft',
                    query: {status: 'draft'}
                },
            ]
        }
    },

    methods:{
        getProducts(query){
            ProductService.index(query).then((result) => {
                this.data = result;
            }).catch((err) => {
                console.log(err);
            });
        }
    },    
    mounted(){
        this.getProducts(this.$route.query);
    },
    components:{
        DataTable, 
    },
    beforeRouteUpdate(to, from, next){
        this.getProducts(to.query);
        next();
    }
}
</script>