<template>
    <ul class="py-5 space-y-1">
        <li v-for="item in items" :key="item.name || item[0]" class="card flex flex-row justify-between items-center">
            <slot :item="item"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: ['items']
}
</script>