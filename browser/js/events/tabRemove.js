import _browser_ from "../objects/browser.js";

function tabRemove (data) {
  const id = data.detail.tabEl.getAttribute("tabid");
  const iframe = document.querySelector(`.browser-tab-content-iframe[tabid='${id}']`);
  
   
      iframe.parentElement.removeChild(iframe);
  clearInterval(_browser_.tabs.get(id).updateLoop);
     _browser_.tabs.delete(id);
  
 
  
 /* if(!document.querySelector(".chrome-tab")) {
    _browser_.chromeTabs.addTab({
       title: "Loading...",
    favicon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F25%2FGoogle_Classroom_icon.svg%2F1200px-Google_Classroom_icon.svg.png&f=1&nofb=1",
  
    });*/
  
}

export default tabRemove;