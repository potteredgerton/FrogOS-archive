import ChromeTabs from "../chrome-tabs.js";



var chromeTabs = new ChromeTabs();
chromeTabs.init(document.querySelector(".chrome-tabs"));

var _browser_ = {
  tabs: new Map(),
  chromeTabs: chromeTabs,
  encodeUrl: __uv$config.encodeUrl,
  decodeUrl: __uv$config.decodeUrl
}

export default _browser_;