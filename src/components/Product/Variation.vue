<template>
    <div>
        <!-- TODO: When a product that is loaded already has variations, use the data to populate this area -->
        <span class="text-muted">Separate items with a comma (,)</span>
        <div class="flex flex-row w-full items-center justify-between my-4" v-for="(item, index) in variations" :key="'variation-'+index">            
            <select v-model="item.type" class="max-h-10 card w-2/12">
                <option v-for="(type, index) in types" :disabled="!type.status" :key="index" :value="type.name">{{ type.name.toUpperCase() }}</option>
            </select>
            <vue-tags-input class="card w-full"
                :separators="[';', ',']"
                :save-on-key="[13, 188, ';', ' ']"
                :addOnKey="[13, 188]"
                @blur="saveToStore"
                v-model="item.values"
                :tags="item.tags"
                @tags-changed="newTags => item.tags = newTags"
            />
            <button 
                class="bg-gray-100 font-body h-6 hover:bg-red-400 hover:text-white rounded-full text-center w-6"
                title="Remove variant"
                @click.prevent="remove(index)"
            >
                -
            </button>
        </div>
        <button @click.prevent="addVariation" v-if="variations.length < 4">
            Add more
        </button>
        <variation-table class="my-10" :variations="variations"></variation-table>


    </div>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';
import VariationTable from '@/components/Product/VariationTable.vue';
export default {
    name: "Variation",
    data: function(){
        return {
            types: [
                {name: 'size', status: true}, 
                {name: 'color', status: true},
                {name: 'material', status: true},
                {name: 'type', status: true}
            ],
            variations: [{
                values: '',
                tags: [],
                type: 'size',
            }],
        }
    },
    methods:{
        saveToStore(){
            // this method helps us to clean the variations of
            // any extra meta data which will not be useful for
            // the backend
            const localVariations = [];

            this.variations.forEach(variation => {
                const type = variation.type;
                const tags = variation.tags.map( tag => tag.text)
                localVariations.push({type: type, tags: tags});
            })

            this.$store.commit('product/setVariation', localVariations);
        },
        addVariation(e){
            e.preventDefault();
            
            this.variations.map((variation, index) => {
                if(this.types[index].name == variation.type){
                    this.types[index].status = false;
                }
            })
            
            this.variations.push({values: '', type: '', tags: []});
            
            //commit to store
            this.saveToStore();
        },
        remove(index){
            this.variations = this.variations.splice(index, 1)

            //Remove item from store
            this.$store.dispatch('product/removeVariation', this.variations);
        }
    },
    components:{
        VueTagsInput,
        VariationTable,
    }    
}
</script>

<style>
    .ti-input {
        border: none !important;
    }
</style>