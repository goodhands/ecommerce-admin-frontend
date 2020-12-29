<template>
    <ul class="py-5 space-y-1">
        <span v-if="busy">
            <li v-for="item in 3" :key="item" class="h-4 w-full bg-gray-200 animate-pulse my-1"></li>
        </span>
        <li v-for="item in items" v-else :key="item.name || item[0]" class="card flex flex-row justify-between items-center">
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
    props: ['items', 'busy']
}
</script>