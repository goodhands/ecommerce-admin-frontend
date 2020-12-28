<template>
    <div class="card relative" :class="size">
        <div class="-left-0 -top-0 absolute bg-white flex flex-row h-full items-center justify-center opacity-90 w-full z-50" 
            v-if="busy">
            <clip-loader :loading="busy" size="50px" color="blue"></clip-loader>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader';

export default {
    data: function(){
        return {

        }
    },
    components:{
        ClipLoader  
    },
    props: ['size', 'busy']
}
</script>