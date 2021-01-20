import { Model as BaseModel } from 'vue-api-query'
export default class Model extends BaseModel {

  // Define a base url for a REST API
  baseURL(url = process.env.VUE_APP_API_BASE_URL) {
    const storeUrl = JSON.parse(window.localStorage.getItem('store'));

    if(!storeUrl) return url;

    const fullUrl = url + '/api/v1/store/' + storeUrl.shortname;

    return fullUrl || url;
  }

  // Implement a default request method
  request(config) {
   
    const customerConfig = Object.assign({
      headers:{
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
      },
      withCredentials: true,
    }, config);

    return this.$http.request(customerConfig);
  }
}