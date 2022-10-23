import _browser_ from "../objects/browser.js";

function activeTabChange (data) {
  const id = data.detail.tabEl.getAttribute("tabid");
  const tabs = document.querySelectorAll(".browser-tab-content .browser-tab-content-iframe");
  tabs.forEach((tab) => {
    tab.removeAttribute("active");
  });
  const iframe = document.querySelector(`.browser-tab-content-iframe[tabid='${id}']`);
  const sr = iframe.src
  iframe.setAttribute("active", "");
  const adr = document.getElementById('proi')
  if (iframe.src != location.protocol + "//" + location.hostname +'/newtab.html' && iframe.src.indexOf('/service/') > -1){
    // let link = _browser_.decodeUrl(iframe.contentWindow.location.href.split("/service/")[1])
  adr.innerText = _browser_.decodeUrl(iframe.contentWindow.location.href.split("/service/")[1])
  } else if (iframe.contentWindow.location.href.includes("/hostedPages/")){
//let pageThing = '../../hostedPages/' + surelol + '.html'
    
//  var surelol = input.split("genow://")[1]
      
    adr.innerText = "genow://" + iframe.contentWindow.location.href.split("/hostedPages/")[1].replace(".html","");
  }else if (iframe.src == location.protocol + "//" + location.hostname +'/newtab.html') {
    adr.innerHTML = ''
  } else {
    adr.innerHTML = 'undef'
  }
}

export default activeTabChange;