<template>
    <div class="py-10">
        <div class="flex flex-row justify-between space-x-4">
            <div class="w-8/12">
                <div class="card">
                    <div class="form-group flex flex-col p-3">
                        <label for="title" class="font-bold cursor-pointer">Title</label>
                        <input type="text" class="border card outline-none focus-within:bg-gray-50 bg-black" id="title" v-model="title">
                    </div>
                    <div class="form-group flex flex-col p-3">
                        <label for="description" class="font-bold cursor-pointer">Description</label>
                        <VueTrix v-model="description" id="description" placeholder="Enter content" localStorage/>
                    </div>
                </div>
                <!-- Media -->
                <div class="card my-3">
                    <div class="form-group-double flex flex-row justify-between">
                        <div class="flex flex-col p-3 w-6/12">
                            <label for="media" class="font-bold cursor-pointer">Media</label>
                        </div>
                    </div>
                </div>
                <!-- Pricing -->
                <div class="card my-3">
                    <div class="form-group-double flex flex-row justify-between">
                        <div class="flex flex-col p-3 w-6/12">
                            <label for="price" class="font-bold cursor-pointer">Price</label>
                            <input v-model="price" type="number" class="money-input border card outline-none focus-within:bg-gray-50 bg-black" id="price">
                        </div>
                        <div class="flex flex-col p-3 w-6/12">
                            <label for="discount" class="font-bold cursor-pointer">Discount</label>
                            <input v-model="discount" type="number" class="money-input border card outline-none focus-within:bg-gray-50 bg-black" id="discount">
                        </div>
                    </div>
                </div>
                <!-- Variations -->
                <div class="card my-4">
                    <div class="form-group flex flex-col p-3">
                        <label for="quantity" class="font-bold cursor-pointer">Variations</label>
                        <label for="variation" class="text-mute my-2">
                            <input type="checkbox" @change="showVariation = !showVariation" id="variation">
                            This product has variations?
                        </label>
                        <Variation v-if="showVariation"/>
                    </div>           
                </div>
                <!-- Shipping -->
                <div class="card my-3">
                    <div class="form-group-double flex flex-row justify-between">
                        <div class="flex flex-col p-3 w-6/12">
                            <label for="price" class="font-bold cursor-pointer">Shipping</label>
                            <input v-model="price" type="number" class="money-input border card outline-none focus-within:bg-gray-50 bg-black" id="price">
                        </div>
                        <div class="flex flex-col p-3 w-6/12">
                            <label for="discount" class="font-bold cursor-pointer">Discount</label>
                            <input v-model="discount" type="number" class="money-input border card outline-none focus-within:bg-gray-50 bg-black" id="discount">
                        </div>
                    </div>
                </div>
            <button class="btn-md btn-primary bg-blue-300">Save</button>
            </div>
            <!-- Right hand side -->
            <div class="w-4/12 sticky max-h-72">
                <div class="card">
                    <div class="form-group flex flex-col p-3">
                        <label for="status" class="font-bold cursor-pointer">Status</label>
                        <select v-model="status" class="border card outline-none focus-within:bg-gray-50 bg-black" id="status">
                            <option value="draft" :selected="status == 'draft'">DRAFT</option>
                            <option value="published" :selected="status == 'published'">PUBLISHED</option>
                        </select>
                    </div>
                    <div class="form-group flex flex-col p-3">
                        <label for="collection" class="font-bold cursor-pointer">Collection</label>
                        <select v-model="collection_id" class="border card outline-none focus-within:bg-gray-50 bg-black" id="collection">
                            <option value="collection.id" :selected="collection.id == collection_id" v-for="collection in collections" :key="collection.id">
                                {{ collection.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group flex flex-col p-3">
                        <label for="quantity" class="font-bold cursor-pointer">Quantity</label>
                        <input type="number" v-model="quantity" class="card" id="quantity">
                    </div>                  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductService from "@/services/ProductService.js";
import Variation from "@/components/Product/Variation.vue";
import VueTrix from "vue-trix";
import { mapState } from 'vuex';
export default {
    name: "Product",
    data: function() {
        return {
            description: null,
            status: null,
            price: null,
            discount: null,
            title: null,
            collection_id: null,
            quantity: null,
            product: [],
            showVariation: false,
            variation:{
                type: "size"
            }
        }
    },
    methods:{
        getProduct(id){
            this.busy = true;
            ProductService.getById(id).then((result) => {
                this.busy = false;
                this.product = result.reduce( (data) => data);
                this.status = this.product.status;
                this.title = this.product.name;
                this.description = this.product.description;
                this.quantity = this.product.stock;
                this.price = this.product.price;
                this.discount = this.product.discount;
                this.collection_id = this.product.collection_id;
            }, console.error);
        }
    },
    computed:{
        ...mapState('collection', [
            'collections'
        ])
    },
    mounted(){
        //load all categories
        this.$store.dispatch('collection/index');
        this.getProduct(this.$route.params.id);
    },
    components:{
        VueTrix,
        Variation
    },
    beforeRouteUpdate(to, from, next){
        this.getProduct(to.params.id);
        next();
    }
}
</script>