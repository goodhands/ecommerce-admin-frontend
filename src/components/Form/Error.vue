<template>
    <div>
        <div
            v-if="Array.isArray(this.errors)"
        >
            <div
                class="bg-white border-gray-200 border-1 p-3"
                v-for="(error, index) in this.errors"
                v-bind:key="index"
            >
                <p class="text-lg text-red-500">
                    {{ error }}
                </p>
            </div>
        </div>
        <div
            v-else-if="this.hasErrors"
            class="bg-white border-gray-200 border-1 p-3"
        >
            <p class="text-lg text-red-500">
                {{ this.errors }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormError",
    props: {
        hasErrors: {
            type: Boolean,
            required: true,
            default: false,
        },
        errorObject:{
            type: Object,
            required: true,
            default: () => {},
        },
        errorMessage:{
            required: true,
        }
    },
    computed:{
        errors(){
            if(this.errorMessage){
                return this.errorMessage;
            }else if(this.errorObject.all()){
                return this.errorObject.all();
            }else if(this.errorObject.message()){
                return this.errorObject.message();
            }else{
                return null;
            }
        }
    }
}
</script>