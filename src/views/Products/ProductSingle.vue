<template>
    <div class="py-10">
        <div class="flex flex-col justify-between space-y-4">
            <form-error :hasErrors="form.errors.any()" :errorObject="form.errors" :errorMessage="productError"></form-error>
            <form @keyup="form.errors.clear()" @submit.prevent="save" class="flex flex-row space-x-4">
                <div class="w-8/12">
                    <div class="card">
                        <div class="form-group flex flex-col p-3">
                            <label for="name" class="font-bold cursor-pointer">name</label>
                            <input type="text" class="border card outline-none focus-within:bg-gray-50 bg-black" id="name" v-model="form.name">
                        </div>
                        <div class="form-group flex flex-col p-3">
                            <label for="description" class="font-bold cursor-pointer">Description</label>
                            <VueTrix v-model="form.description" id="description" placeholder="Enter content" localStorage/>
                        </div>
                    </div>
                    <!-- Media -->
                    <div class="card my-3">
                        <div class="form-group-double flex flex-row justify-between">
                            <div class="flex flex-col p-3 w-full">
                                <label for="media" class="font-bold cursor-pointer">Media</label>
                                <file-uploader></file-uploader>
                            </div>
                        </div>
                    </div>
                    <!-- Pricing -->
                    <div class="card my-3">
                        <div class="form-group-double flex flex-row justify-between">
                            <div class="flex flex-col p-3 w-6/12">
                                <label for="price" class="font-bold cursor-pointer">Price</label>
                                <input v-model="form.price" type="number" class="money-input border card outline-none focus-within:bg-gray-50 bg-black" id="price">
                            </div>
                            <div class="flex flex-col p-3 w-6/12">
                                <label for="discount" class="font-bold cursor-pointer">Discount</label>
                                <input v-model="form.discount" type="number" class="money-input border card outline-none focus-within:bg-gray-50 bg-black" id="discount">
                            </div>
                        </div>
                    </div>
                    <!-- Inventory -->
                    <div class="card my-3">
                        <div class="flex flex-col p-3 w-12">
                            <label for="price" class="font-bold cursor-pointer">Inventory</label>
                        </div>
                        <div class="form-group-double flex flex-row justify-between">
                            <div class="flex flex-col p-3 w-6/12">
                                <label for="sku" class="font-bold cursor-pointer">SKU</label>
                                <small class="text-muted">Store Keeping Unit</small>
                                <input v-model="form.sku" type="text" class="border card outline-none focus-within:bg-gray-50 bg-black" id="sku">
                            </div>
                            <div class="flex flex-col p-3 w-6/12">
                                <label for="isbn" class="font-bold cursor-pointer">ISBN</label>
                                <small class="text-muted">Useful when selling items stationary items</small>
                                <input v-model="form.isbn" type="text" class="border card outline-none focus-within:bg-gray-50 bg-black" id="isbn">
                            </div>
                        </div>
                    </div>
                    <!-- Shipping -->
                    <div class="card my-3">
                        <div class="flex flex-col p-3 w-12">
                            <label for="price" class="font-bold cursor-pointer">Shipping</label>
                        </div>
                        <div class="form-group-double flex flex-row justify-between">
                            <div class="flex flex-col p-3 w-full">
                                <label for="weight" class="font-bold cursor-pointer">Weight (kg)</label>
                                <small class="text-muted">
                                    Used to calculate shipping rates at checkout and label prices during fulfillment.
                                </small>
                                <input v-model="form.weight" type="number" class="border card outline-none focus-within:bg-gray-50 bg-black" id="weight">
                            </div>
                        </div>
                    </div>
                    <!-- Variations -->
                    <div class="card my-4">
                        <div class="form-group flex flex-col p-3">
                            <label for="variation" class="font-bold cursor-pointer">Variations</label>
                            <label for="variation" class="text-mute my-2">
                                <input type="checkbox" @change="showVariation = !showVariation" id="variation">
                                This product has variations?
                            </label>
                            <Variation v-if="showVariation"/>
                        </div>           
                    </div>
                <button type="submit" class="btn-md btn-primary bg-blue-300">Save</button>
                </div>
                <!-- Right hand side -->
                <div class="w-4/12 sticky max-h-72">
                    <div class="card">
                        <div class="form-group flex flex-col p-3">
                            <label for="status" class="font-bold cursor-pointer">Status</label>
                            <select v-model="form.status" class="border card outline-none focus-within:bg-gray-50 bg-black" id="status">
                                <option value="draft" :selected="form.status == 'draft'">DRAFT</option>
                                <option value="published" :selected="form.status == 'published'">PUBLISHED</option>
                            </select>
                        </div>
                        <div class="form-group flex flex-col p-3">
                            <label for="collection" class="font-bold cursor-pointer">Collection</label>
                            <select v-model="form.collection_id" class="border card outline-none focus-within:bg-gray-50 bg-black" id="collection">
                                <option value="collection.id" :selected="isSelectedCollection(index, form.collection_id)" v-for="(collection, index) in collections" :key="index">
                                    {{ collection.name }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group flex flex-col p-3">
                            <label for="stock" class="font-bold cursor-pointer">Quantity</label>
                            <small class="text-muted" v-if="newQuantity">Adding {{ newQuantity }} items to stock</small>
                            <input type="number" v-model="form.stock" class="card" id="stock">
                        </div>                  
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import ProductService from "@/services/ProductService.js";
import Variation from "@/components/Product/Variation.vue";
import VueTrix from "vue-trix";
import { mapGetters, mapState } from 'vuex';
import FileUploader from '@/components/Product/FileUploader.vue';
import Form from '@/helpers/Form';
import FormError from '@/components/Form/Error.vue';
export default {
    name: "Product",
    data: function() {
        return {
            form: new Form({
                productId: null,
                description: null,
                status: null,
                price: null,
                discount: null,
                name: null,
                collection_id: null,
                stock: null,
                weight: null,
                sku: null,
                isbn: null,
            }),
            showVariation: false,
        }
    },
    methods:{
        save(){
            //defer form handling to store and react to the response
            this.$store.dispatch('product/save', this.form);
        },
        getProduct(id){
            this.busy = true;
            ProductService.getById(id).then((result) => {
                this.busy = false;

                const product = result.reduce( (data) => data);
                //dispatch the product to store
                this.$store.commit('product/setProduct', product);
                
                this.form.productId = this.product.id;
                this.form.status = this.product.status;
                this.form.name = this.product.name;
                this.form.description = this.product.description;
                this.form.stock = this.product.stock;
                this.form.price = this.product.price;
                this.form.discount = this.product.discount;
                this.form.collection_id = this.product.collection_id;

            }, console.error);
        },
        isSelectedCollection(index, collection_id){
            if(this.collections && this.collections[index].id === collection_id){
                return true;
            }else{
                return false;
            }
        },
    },
    computed:{
        ...mapState('collection', [
            'collections'
        ]),
        ...mapGetters('product', [
            'productError',
            'product'
        ]),
        newQuantity(){
            if(this.product?.stock && this.form.stock > this.product.stock)
                return parseInt(this.form.stock) - parseInt(this.product.stock);
            else
                return false;
        },
        productId(){
            return this.product.id;
        },
    },
    mounted(){
        //load all categories
        this.$store.dispatch('collection/index');
        this.getProduct(this.$route.params.id);
    },
    components:{
        VueTrix,
        Variation,
        FileUploader,
        FormError,
    },
    beforeRouteUpdate(to, from, next){
        this.getProduct(to.params.id);
        next();
    }
}
</script>