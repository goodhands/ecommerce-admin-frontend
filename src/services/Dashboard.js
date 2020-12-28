import axios from 'axios';

const Dashboard  = {
    async getWeeklyStats(){
        return axios.get('/store/outlets/dashboard/weeklyStats');
    }
}

export default Dashboard;