import Model from './Model'

export default class Customers extends Model {
    // Set the resource route of the model
    resource() {
        return 'customer'
    }

    primaryKey(){
        return 'id';
    }
}