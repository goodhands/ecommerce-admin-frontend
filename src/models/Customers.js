import Model from './Model'

export default class Orders extends Model {
    // Set the resource route of the model
    resource() {
        return 'customers'
    }
}