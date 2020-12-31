<template>
    <input type="text" v-model="text" 
            placeholder="Search..." 
            v-on:keyup="filter"
            class="card w-full px-2 text-sm rounded-sm outline-none border-b-1 border-gray-300"/>
</template>

<script>
export default {
    name: "KeywordFilter",
    props: ['data'],
    data() {
        return {
            text:"",
        }
    },
    methods:{
        filter(){
            //do some filtering with `text`
            const filtered = this.data.splice(0, 1);
            this.$emit("filtered", filtered);
        }
    }
}
</script>