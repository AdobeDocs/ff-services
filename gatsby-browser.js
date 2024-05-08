
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

    //Custom Analytics Tracking 
    document.querySelector(".fireflyService-hero")?.setAttribute("daa-lh", "fireflyService hero");
    document.querySelectorAll(".fireflyService-hero a").forEach(link => {
      link.setAttribute("daa-ll", link.textContent.trim());
    })
    document.querySelector(".services")?.setAttribute("daa-lh", "services");
    document.querySelectorAll(".services a").forEach(link => {
      link.setAttribute("daa-ll", link.textContent.trim().slice(0, -2));
    })
    document.querySelector(".contactUs")?.setAttribute("daa-lh", "contactUs");
    document.querySelectorAll(".contactUs a").forEach(link => {
      link.setAttribute("daa-ll", link.textContent.trim());
    })
  }

};