<template>
    <div class="relative inline-block text-left" @blur="showDropDown = false">
        <div>
            <button type="button" @click="showDropDown = !showDropDown" 
            class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" 
            >
                <slot name="menu-button"></slot>
                <!-- Heroicon name: chevron-down -->
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <!--
            Dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        -->

        <div v-show="showDropDown" class="origin-top-right absolute z-50 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-1">
                <slot name="menu-body"></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Menu",
    props: ['default', 'lists', 'label'],
    data() {
        return {
            showDropDown: false,
        }
    },
    methods:{
        filter(arg){
            this.$router.push('?sort=' + arg);
        }
    }
}
</script>