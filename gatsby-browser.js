const isBrowser = typeof window !== "undefined";

export const onRouteUpdate = () => {

  if (isBrowser) {

    let isLocal = true;
    let navLinksBaseUrl = "";
    let baseurl = "/faas";

    console.log('navLinksBaseUrl', navLinksBaseUrl)

    // stage/deploy
    if (window.location.host.indexOf("adobe.com") >= 0 || window.location.host.indexOf("github.io") >= 0) {
      isLocal = false;
      navLinksBaseUrl = "/firefly-services";
      baseurl = navLinksBaseUrl + "/faas"
    }

    // set faas-form page iframe src to point to correct location
    let fassForm = document.querySelector('#fassForm');
    if (fassForm && !isLocal) {
      fassForm.src = navLinksBaseUrl + '/' + fassForm.src.split("/").pop();
    }

  }

};