<template>
    <div>
        <span class="text-muted">Separate items with a comma (,)</span>
        <div class="flex flex-row w-full items-center justify-between my-4" v-for="(item, index) in variations" :key="'variation-'+index">            
            <select v-model="item.type" class="max-h-10 card w-2/12">
                <option v-for="(type, index) in types" :disabled="!type.status" :key="index" :value="type.name">{{ type.name.toUpperCase() }}</option>
            </select>
            <vue-tags-input class="card w-full"
                :separators="[';', ',']"
                :save-on-key="[13, 188, ';', ' ']"
                :addOnKey="[13, 188]"
                v-model="item.values"
                :tags="item.tags"
                @tags-changed="newTags => item.tags = newTags"
            />
            <button 
                class="bg-gray-100 font-body h-6 hover:bg-red-400 hover:text-white rounded-full text-center w-6"
                title="Remove variant"
                @click="remove(index)"
            >
                -
            </button>
        </div>
        <button @click="addVariation()" v-if="variations.length < 4">
            Add more
        </button>
    </div>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';

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
        addVariation(){
            this.variations.map((variation, index) => {
                console.log(this.types[index].name);
                if(this.types[index].name == variation.type){
                    this.types[index].status = false;
                }
            })
            
            this.variations.push({values: '', type: '', tags: []});
        },
        remove(index){
            this.variations.splice(index)
        }
    },
    components:{
        VueTagsInput
    }    
}
</script>

<style>
    .ti-input {
        border: none !important;
    }
</style>