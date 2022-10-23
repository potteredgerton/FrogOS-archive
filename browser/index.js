document.getElementById('proi').addEventListener('keydown', function(e) {
    if (e.keyCode == 13){
      e.preventDefault();
            var input = document.getElementById('proi').innerText
         
     if (input.indexOf('genow://') > -1) {
       alert("Genow intenral url")
   
          const iframee = document.querySelector(`.browser-tab-content-iframe[active]`);
          var surelol = input.split("genow://")[1]
      let pageThing = './hostedPages/' + surelol + '.html'
       iframee.src = pageThing;
     } else if (input.indexOf("example.com") > -1){
       const iframee = document.querySelector(`.browser-tab-content-iframe[active]`);
       
         if (!(input.startsWith('https://') || input.startsWith('http://'))) input = 'https://' + input;
document.getElementById('proi').innerText = input;
         iframee.src = '/client/' + input;
  
    
     
     }else {
       window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.trim()
          if (url.indexOf('tiktok') > -1){
        url = ''
      }
        if (!isUrl(url)) url = `https://duckduckgo.com/?q=${url}&atb=v320-4__&ia=web`;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
document.getElementById('proi').innerText = url;
       // window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
                  const iframe = document.querySelector(`.browser-tab-content-iframe[active]`);
                let ok = __uv$config.prefix + __uv$config.encodeUrl(url);
               iframe.src= `${ok}`

    });
     }
    }
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};