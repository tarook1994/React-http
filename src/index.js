import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios'

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

Axios.interceptors.request.use(requestConfigToBeModified => {
    //Edit the request (adding headers, etc ..)
    //Returning the request is important to make sure we are not blocking the requst. Otherwise, the request will fail
    return requestConfigToBeModified;
},error => {
    console.log(error)
})

Axios.interceptors.response.use(response => {
    return response;
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
