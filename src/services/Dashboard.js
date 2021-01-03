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
        const orders = await Orders
                            .where('fulfilled', false)     
                            .where('paid', true)     
                            .orderBy('-created_at')
                            .include('customer', 'products')      
                            .get();
        return orders;
    },

    async getMostViewedProducts(){
        return axios.get('/store/outlets/dashboard/most-viewed');
    }

}

export default Dashboard;