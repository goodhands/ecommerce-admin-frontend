<template>
    <div>
        <Search/>
    </div>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
    data: function(){
        return {
            page: 'Home'
        }
    },
    components:{
        Search
    }
}
</script>