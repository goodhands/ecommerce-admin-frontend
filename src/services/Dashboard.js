import axios from 'axios';

const Dashboard  = {
    async getWeeklyStats(){
        return axios.get('/store/outlets/dashboard/weekly-stats');
    },

    async getRecentOrders(){
        return axios.get('/store/outlets/dashboard/recent-orders');
    },

    async getMostViewedProducts(){
        return axios.get('/store/outlets/dashboard/most-viewed');
    }

}

export default Dashboard;