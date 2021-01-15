<template>
    <div>
        <span class="text-muted">Separate items with a comma (,)</span>
        <div class="flex flex-row w-full justify-between my-4" v-for="(item, index) in variations" :key="'variation-'+index">            
            <select v-model="item.type" class="max-h-10 card w-2/12">
                <option v-for="(type, index) in types" :key="index" :value="type">{{ type.toUpperCase() }}</option>
            </select>
            <vue-tags-input class="card w-full"
                :separators="[';', ',']"
                :save-on-key="[13, ', ', ';']"
                v-model="item.values"
                :tags="item.tags"
                @tags-changed="newTags => item.tags = newTags"
            />
        </div>
        <button @click="addVariation()">
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
                'size', 'color', 'length', 'type', 'shape'
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
            this.variations.push({values: '', type: 'size', tags: []});
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