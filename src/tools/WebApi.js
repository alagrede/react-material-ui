import axios from 'axios';
import appUtil from './AppUtil';

class WebAPI {

  createClient() {
    let instance = axios.create({
      baseURL: appUtil.serverUrl()
    });

    instance.defaults.timeout = 2500;
    instance.defaults.maxRedirects = 0;
    instance.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
    instance.defaults.headers.common['Content-Type'] = "application/json";
    instance.defaults.headers.common['Cache-Control'] = "no-cache";
    instance.defaults.headers.common['Pragma'] = "no-cache";
    instance.defaults.headers.common['If-Modified-Since'] = new Date().getMilliseconds();

    return instance;
  }


  post(url, content){
    return this.createClient().post(url, content);
  }

  get(url) {
  	return this.createClient().get(url);
  }

}

const webApi = new WebAPI();

export default webApi;
export { WebAPI };
