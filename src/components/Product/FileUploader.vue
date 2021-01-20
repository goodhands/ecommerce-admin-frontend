<template>
  <div>

    <file-pond
        name="files"
        ref="pond"
        label-idle="Drop files here..."
        v-bind:allow-multiple="true"
        accepted-file-types="image/jpeg, image/png"
        :server="endpoint"
        v-bind:files="files"
        v-on:init="handleFilePondInit"
        v-on:addfilestart="updateEndpoint"/>

  </div>
</template>

<script>
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { mapGetters, mapState } from 'vuex';

// Create component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

export default {
    name: 'app',
    data: function() {
        return {
            endpoint: null,
            myFiles: []
        };
    },
    computed:{
        ...mapState('product', [
            'product'
        ]),
        ...mapGetters('store', [
            'getShortname'
        ]),
        files(){
            if(this.product){
                return this.product.media_library;
            }else{
                return [];
            }
        }
    },
    methods: {
        updateEndpoint(){
            this.endpoint = `http://localhost:8000/api/v1/store/${this.getShortname}/products/${this.product.id}/media`;
        },
        handleFilePondInit: function() {
            console.log('FilePond has initialized');
            // FilePond instance methods are available on `this.$refs.pond`

            //show already existing files if available
            this.$refs.pond.addFiles(this.files);
        }
    },
    mounted() {
        console.log(this.product)
    },
    components: {
        FilePond
    }
};
</script>

<style>
    .filepond--item {
        width: calc(50% - .5em);
    }
</style>