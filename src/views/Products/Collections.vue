<template>
    <div class="my-10">
        <DataTable :headings="headings" :options="options" :data="data" :filters="filters">
            <template v-slot:media={media}>
                <div class="flex flex-row items-center justify-between space-x-1">
                    <img :src="media" v-for="file in media" :key="file"
                        class="w-10 h-auto rounded" alt="">
                </div>
            </template>
        </DataTable>
    </div>
</template>

<script>
import CollectionService from '@/services/CollectionService'
import DataTable from '@/components/Table/Table';

export default {
    data: function () {
        return {
            headings: [
                {
                    key: 'media',
                },
                {
                    key: 'name',
                    label: 'Name'
                },
                {
                    key: 'description',
                    label: 'Description'
                },
                {
                    key: 'products_count',
                    label: 'Products',
                },
                {
                    key: 'created_at',
                    label: 'Date',
                    type: 'date'
                },
            ],
            options:[],
            data: [],
            filters:[
                {
                    active: true,
                    label: 'All',
                    query: {}
                },
            ]
        }
    },

    methods:{
        getCollections(query){
            CollectionService.index(query).then((result) => {
                this.data = result;
            }).catch((err) => {
                console.log(err);
            });
        }
    },    
    mounted(){
        this.getCollections(this.$route.query);
    },
    components:{
        DataTable, 
    },
    beforeRouteUpdate(to, from, next){
        this.getCollections(to.query);
        next();
    }
}
</script>