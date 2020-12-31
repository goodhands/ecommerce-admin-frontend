<template>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 h-screen align-middle inline-block min-w-full sm:px-6 lg:px-4">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th v-for="(option, index) in options" :key="index" 
                                scope="col" 
                                :colspan="option.colspan || 1"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <component :is="option.content"></component>
                            </th>
                            <th
                                colspan="3"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                v-if="filter && !options.find(op => op.content == 'Filter')"
                            >
                                <KeywordFilter :data="data" @filtered="onFiltered"/>
                            </th>
                        </tr>
                    </thead>
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" 
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                v-for="(heading, index) in headings" :key="index">
                                {{ heading.label }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="(item, index) in data" :key="index">
                            <td class="px-6 py-4 whitespace-nowrap" v-for="(heading, indices) in headings" :key="indices">
                                <div class="text-sm text-gray-900">{{ item[heading.key] }}</div>
                                <div class="text-sm text-gray-500">Optimization</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import KeywordFilter from '@/components/Table/Filter.vue';

export default {
    name: "DataTable",
    components:{
        KeywordFilter,
    },
    props:{
        // lenght must match the length of headings. 
        //e.g :headings="[{colspan:1, content:'Type'}, 
        //{colspan: 1}, {colspan: 1, content: '<search/>'}]"
        options:{
            type: Array, 
            required: true
        },
        headings:{
            type: Array, 
            required: true
        },
        data:{
            type: Array,
            required: true
        },
        filter: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    methods:{
        onFiltered(value){
            console.log("Just receieved a filtered event");
            this.data = value;
        }
    }, 
}
</script>