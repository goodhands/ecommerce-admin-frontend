<template>
    <div class="card" :class="size">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data: function(){
        return {

        }
    },
    props: ['size']
}
</script>