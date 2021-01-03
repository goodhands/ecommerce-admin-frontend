import { Model as BaseModel } from 'vue-api-query'

export default class Model extends BaseModel {

  // Define a base url for a REST API
  baseURL(url = 'http://localhost:8000/') {
    return url;
  }

  // Implement a default request method
  request(config) {
   
    const customerConfig = Object.assign({
      headers:{
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Authorization': 'Bearer 1|f2PqSraLqTaIgRJ7CMJmncNXq1YGQbpvHHFrCpw4'
      },
      withCredentials: true,
    }, config);

    return this.$http.request(customerConfig);
  }
}