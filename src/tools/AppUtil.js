

class AppUtil {

  serverUrl() {
	  if (window.wsUrl !== undefined) {
		  return window.wsUrl;
	  } else {
		  return 'http://localhost:8080/';
	  }
  }

}

const appUtil = new AppUtil();

export default appUtil;
export { AppUtil };
