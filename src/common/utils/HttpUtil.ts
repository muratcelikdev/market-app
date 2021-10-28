import axios from 'axios';

class HttpUtil {
  private axios: any;

  constructor() {
    const baseURL = 'http://localhost:5000/';

    this.axios = axios.create({
      baseURL,
    });
  }

  makeRequest = (request) => this.axios(request);
}

export default new HttpUtil();
