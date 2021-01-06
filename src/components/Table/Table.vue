<template>
    <div class="flex flex-col">
        <div class="-my-2 sm:-mx-6 lg:-mx-8">
            <div class="py-2 h-screen align-middle inline-block min-w-full sm:px-6 lg:px-4">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                scope="col" 
                                colspan="1"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <Menu>
                                    <template #menu-button>{{ activeFilter }}</template>
                                    <template #menu-body>
                                        <div class="flex flex-col w-full">
                                            <button @click="filterMenu(item)" class="link border-none text-sm" v-for="(item, index) in filters" :key="index">
                                                {{ item.label }}
                                            </button>
                                        </div>
                                    </template>
                                </Menu>
                            </th>
                            <template v-if="this.headings.length > 4">
                                <th v-for="col in remainingCols" :key="'col-' + col"></th>
                            </template>
                            <th
                                colspan="3"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                v-if="!options.find(op => op.content == 'Filter')"
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
                    <tbody class="bg-white divide-y divide-gray-200" v-if="data !== null || data.length != 0">
                        <tr v-for="(item, index) in data" :key="index">
                            <td class="px-6 py-4 whitespace-nowrap" v-for="(heading, indices) in headings" :key="indices">
                                    <slot :name="heading.key" v-bind:[heading.key]="item[heading.key]">
                                        <!-- Hacky way to get the singular path name. e.g: Orders -> Order -->
                                        <router-link :to="{name: nextrouteName, params: {id: item['id']}}">
                                            <div class="text-sm text-gray-900" v-if="heading.type && heading.type == 'money'">
                                                {{ item[heading.key] | money }}
                                            </div>
                                            <div class="text-sm text-gray-900" v-else-if="heading.type && heading.type == 'date'">
                                                {{ item[heading.key] | dateAgo }}
                                            </div>
                                            <div class="text-sm text-gray-900" v-else-if="heading.type && heading.type == 'status'">
                                                    <span>{{ item[heading.key].toUpperCase() }}</span>
                                            </div>
                                            <div v-else-if="item[heading.key] != null" class="text-sm text-gray-900">
                                                {{ item[heading.key] }}
                                            </div>
                                            <div v-else class="text-sm text-gray-900 italic">
                                                {{ "No " + heading.key }}
                                            </div>
                                        </router-link>
                                    </slot>
                            </td>
                        </tr>
                    </tbody>
                    <span v-else>
                        Loading
                    </span>
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
    data: function(){
        return  {
            activeFilter: "All",
            currentPath: this.$route.path,
            routeName: this.$route.name,
        }
    },
    props:{
        // lenght must match the length of headings. 
        //e.g :headings="[{colspan:1, content:'Type'}, 
        //{colspan: 1}, {colspan: 1, content: '<search/>'}]"
        options:{ //unsupported for now
            type: Array, 
            required: false
        },
        headings:{
            type: Array, 
            required: true
        },
        data:{
            type: Array,
            required: true
        },
        filters:{
            type: Array,
        },
    },
    methods:{
        onFiltered(value){
            console.log("Just receieved a filtered event");
            this.data = value;
        },

        filterMenu(filter){
            if(Object.keys(filter.query).length > 1){
                throw new Error("Only query per filter is allowed");
            }

            if(Object.keys(filter.query).length < 1) return;

            //set the button text to the selected menu
            this.activeFilter = filter.label;

            const filterOption = Object.keys(filter.query).toString();
            const filterValue = Object.values(filter.query).toString();

            const filterQuery = `filter[${filterOption}]`;

            const currentPath = this.currentPath;

            this.$router.push({path: currentPath, query: { [filterQuery]: filterValue } });
        }
    }, 
    computed:{
        remainingCols(){
            return this.headings.length - 4;
        },
        nextrouteName(){
            return this.$route.name.substr(0, this.$route.name.length - 1);
        }
    }
}
</script>