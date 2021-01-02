import axios from 'axios';
import Orders from '@/models/Orders';

const Dashboard  = {    
    async getWeeklyStats(){
    
        return axios.get('/store/outlets/dashboard/weekly-stats');
    },

    /**
     * Response body:
     * Criteria: 
     * - unfulfilled
     * - paid
     * - recent
     * Relationships: 
     * - customer, products
     * Count:
     * - number of results returned
     * 
     */
    async getRecentOrders(){
        console.log(new Orders().baseURL());
        const orders = await Orders
                            .where('fulfilled', false)     
                            .where('paid', true)     
                            .orderBy('created_at')
                            .with('customer', 'products')      
                            .get();

        console.log(Orders.$http);

        return orders;
    },

    async getMostViewedProducts(){
        return axios.get('/store/outlets/dashboard/most-viewed');
    }

}

export default Dashboard;