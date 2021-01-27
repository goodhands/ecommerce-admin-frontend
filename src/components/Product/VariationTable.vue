<template>
    <div
        v-if="this.variations.length > 0 && this.variations[0].tags.length > 0" 
        class="shadow overflow-x-scroll border-b border-gray-200 sm:rounded-lg"
    >
        <table 
            class="min-w-full divide-y divide-gray-200" 
            border="1"
        >
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" colspan="1"></th>
                    <th scope="col" colspan="1"></th>
                    <th 
                        scope="col" 
                        colspan="1"
                        v-for="(variation, index) in variations" 
                        :key="index"
                    >
                        {{ variation.type | upperfirst }}
                    </th>
                    <th scope="col" colspan="1">Price</th>
                    <th scope="col" colspan="1">Stock</th>
                    <th scope="col" colspan="1">
                        <button @click.prevent="addInventory">
                            +
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200" v-if="variations !== null || variations.length != 0">
                <tr v-for="(item, index) in inventory" :key="index">
                    <td 
                        class="px-6 py-4 whitespace-nowrap"
                    ></td>
                    <td 
                        class="px-6 py-4 whitespace-nowrap"
                    ></td>
                    <td 
                        class="px-6 py-4 whitespace-nowrap"
                        v-for="(variation, vindex) in variations" 
                        :key="vindex"
                    >
                        <select class="form-control" @blur="saveVariationInventory" v-model="inventory[index].variant[variation.type]">
                            <option v-for="(tag, index) in variation.tags" :key="index" :value="tag.text">
                               {{ tag.text }}
                            </option>
                        </select>
                    </td>
                    <td 
                        class="px-6 py-4 whitespace-nowrap"
                    >
                        <input type="number" @blur="saveVariationInventory" class="form-control w-32" v-model="inventory[index].price">
                    </td>
                    <td
                        class="px-6 py-4 whitespace-nowrap"
                    >
                        <input type="number" @blur="saveVariationInventory" class="form-control w-32" v-model="inventory[index].stock">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['variations'],
    data: function(){
        return {
            inventory:[{
                price: 0.00,
                stock: 0,
                variant: {
                    material: null,
                    size: null,
                    color: null,
                    type: null,
                }
            }]
        }
    },
    methods:{
        saveVariationInventory(){
            this.$store.commit('product/setVariationInventory', this.inventory);
        },
        addInventory(){
            this.inventory.push({
                price: 0.00,
                stock: 0,
                variant: {
                    material: null,
                    size: null,
                    color: null,
                    type: null,
                }
            })
        }
    }
}
</script>

<style scoped>
    th{
        @apply px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider;
    }
</style>