import axios from 'axios';

class HttpUtil {
  private axios: any;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });
  }

  makeRequest = (request) => this.axios(request);
}

export default new HttpUtil();
