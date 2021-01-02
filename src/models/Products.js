import Model from './Model'

export default class Products extends Model {
    // Set the resource route of the model
    resource() {
        return 'products'
    }

    primaryKey(){
        return 'shortname';
    }
}