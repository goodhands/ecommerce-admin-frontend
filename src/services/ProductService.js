import Products from '@/models/Products';

const ProductService  = {
    async index(query){
        return await Products.params(query).get();
    }
}

export default ProductService;