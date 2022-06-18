import axios from 'axios';
// abstract class Api {
//   static api_token?: string
//   static client?: AxiosInstance
//   static api_url?: string
//   static headers: AxiosRequestHeaders = {
//     'Accept': '*/*',
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
//   static init = () => {
//     // this.api_token = getCookie("ACCESS_TOKEN");
//     if (this.api_token) {
//       this.headers.Authorization = 'Bearer ' + this.api_token;
//     }
//     this.client = axios.create({ baseURL: this.api_url, timeout: 31000, headers: this.headers });
//     return this.client;
//   };
//   static getUserList = (params: any) => this.init().get("/users", { params: params })
//   static addNewUser = (data: any) => this.init().post("/users", data)
// }


const axiosClient = axios.create( {
  baseURL: 'http://127.0.0.1:3001',
  withCredentials: true,
  timeout: 31000,
  headers: {
    'Accept': '*/*',
  }
} )
/**
 * Using interceptors for clean redirects When calling interacting APIs, 
 * especially when there is authentication involved. 
 * You will need to define conditions when your call is unauthorized 
 * and make your application react appropriately. 
 * Interceptors are perfect for this use case.
 * Let’s say that we will need our application to redirect us to our home page when our cookies expire 
 * and when our cookie expires the API will return a 401 status code. 
 * This is how you would go about it:
*/
// axiosClient.interceptors.response.use(
//   response => response,
//   error => {
//     let res = error.response;
//     if ( res.status === 401 ) {
//       window.location.href = '/';
//     }
//     console.error( 'Looks like there was a problem. Status Code: ' + res.status );
//     return Promise.reject( error );
//   }
// );

export default axiosClient