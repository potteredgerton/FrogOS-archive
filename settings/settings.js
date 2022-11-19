const themetoggle = document.getElementById("")
const bginput = document.getElementById('bginput');

function saveBg() {
  const bgurl = bginput.value
  window.localStorage.setItem("bgurl", bgurl)
}

function saveTheme() {
  //idk yet
}