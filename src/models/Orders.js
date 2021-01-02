import Model from './Model'
import Products from './Products';
import Customers from './Customers';

export default class Orders extends Model {
    // Set the resource route of the model
    resource() {
        return 'orders'
    }

    // Computed properties are reactive -> order.fullName
    // Make sure to use "get" prefix 
    get fullName () {
        return `${this.firstname} ${this.lastname}`
    } 

    // Method -> Order.makeBirthday()
    // Apply model instances to eager loaded relationships
    relations() {
        return {
            products: Products,
            customer: Customers,
        }
    }
}