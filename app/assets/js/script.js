/*
let data = sessionStorage.getItem("login");
if (data != null) {
  window.location.replace = "./login";
}
*/
const apps = document.querySelector("#br-os-apps")
const menu = document.querySelector("#os-ct-menu")
const os_window = document.querySelector(".br-os-window")
const brand_window = document.querySelector(".brand")
const tbarapps = document.querySelector("#tbarapps")
const app_main = document.querySelector("#app-main")
const maximise = document.querySelector("#maximise")
const shorter = document.querySelector("#shorter")
const cross = document.querySelector("#cross")
const taskbar = document.querySelector("#taskbar")
const contextmenu = document.querySelector("#context-menu")
const batterydiv = document.querySelector("#batterydiv")
const click = new Audio("assets/music/click.wav")
const con = new Audio("assets/music/alert.wav")
const okay = new Audio("assets/music/positive.wav")
const no = new Audio("assets/music/negative.wav")
close(os_window)
//create_app("Browser", "assets/images/apps/chromium.png", "browser", "/browser2")
//create_app("Tetris", "assets/images/apps/tetris.png", "tetris", "/tetris")
create_app("Weather", "assets/images/apps/weather.png", "weather", "/weather")
create_app("Camera", "assets/images/apps/camera.png", "camera", "/camera")
create_app("Calculator", "assets/images/apps/calculator.png", "calculator", "/calculator")
create_app("Terminal", "assets/images/apps/terminal.png", "term", "/terminal")
//create_app("Settings", "assets/images/apps/settings.png", "settings", "/settings")

function loop() {
  var date = new Date()
  var sec = date.getSeconds()

  setTimeout(() => {
    setInterval(() => {
      datetime()
    }, 60 * 500);
  }, (60 - sec) * 1000);
}

function datetime() {
  const val = new Date();
  const min = val.getMinutes();
  const bmin = min.toString();
  if (bmin.length == 1) {
    let hours = val.getHours();
    let day = val.getDate();
    let month = val.getMonth() + 1;
    let year = val.getFullYear();
    let sess = "AM"
    if (hours == 0) {
      hours = 12
      sess = "AM"
    } else if (hours > 12) {
      hours = hours - 12;
      sess = "PM"
    }
    const time = hours + ":0" + min + " " + sess;
    const date = month + "/" + day + "/" + year;
    document.getElementById('time').innerHTML = (time);
    document.getElementById('date').innerHTML = (date);
  } else {
    let hours = val.getHours();
    let day = val.getDate();
    let month = val.getMonth() + 1;
    let year = val.getFullYear();
    let sess = "AM"
    if (hours == 0) {
      hours = 12
      sess = "AM"
    } else if (hours > 12) {
      hours = hours - 12;
      sess = "PM"
    }
    const time = hours + ":" + min + " " + sess;
    const date = month + "/" + day + "/" + year;
    document.getElementById('time').innerHTML = (time);
    document.getElementById('date').innerHTML = (date);
  }
}

function create_app(name, image, id, src) {
  let img = document.createElement("img")
  img.src = image
  img.setAttribute("alt", name)
  let p = document.createElement("p")
  let tbarapp = document.createElement("img")
  tbarapp.src = image
  tbarapp.id = id
  tbarapp.onclick = () => window_open(id, src, image, name);
  p.innerText = name
  tbarapps.appendChild(tbarapp)
}

function window_open(id, src, image, text) {
  click.play()
  brand_window.innerHTML = ""
  app_main.innerHTML = "<iframe src=" + src + "></iframe>"
  init_window()
  let img = document.createElement("img")
  img.src = image
  let p = document.createElement("p")
  p.innerText = text
  brand_window.appendChild(img)
  brand_window.appendChild(p)
  open(os_window)
  dragElement(document.getElementById(id));
}

function open(tag) {
  tag.style.display = "inline-block"
}

function close(tag) {
  tag.style.display = "none"
}

function init_window() {
  close(shorter)
  minimize.onclick = e => {
    click.play()
    minimize_window()
  }
  maximise.onclick = e => {
    click.play()
    maximise_window()
  }
  shorter.onclick = e => {
    click.play()
    shorter_window()
  }
  cross.onclick = e => {
    click.play()
    close(os_window)
  }
}

function minimize_window() {
  os_window.style.display = "none"
}

function maximise_window() {
  open(shorter)
  close(maximise)
  console.log(window)
  os_window.style.top = 0
  os_window.style.left = 0
  os_window.style.width = "100%"
  os_window.style.height = "100vh"
}

function shorter_window() {
  open(maximise)
  close(shorter)
  os_window.style.top = window.restoreY
  os_window.style.left = window.restoreX
  os_window.style.width = "50%"
  os_window.style.height = "50vh"
}

function open_menu(e, id) {
  e.preventDefault()
  menu.classList.add("active")
  menu.querySelectorAll("ul li")[0].childNodes[0].onclick = () => {
    window_open(id)
  }
  menu.querySelectorAll("ul li")[1].childNodes[0].onclick = () => {
    admin_access(id)
  }
  menu.querySelectorAll("ul li")[2].childNodes[0].onclick = () => {
    remove_app(id)
  }
  menu.querySelectorAll("ul li")[3].childnodes[0].onclick = () => {
    app_properties()
  }
  menu.style.top = e.pageY + 5 + "px"
  menu.style.left = e.pageX + 5 + "px"
  return false
}

window.onclick = e => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active")
  }
}
document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
  document.getElementById("context-menu").style.display = "none";
}

function rightClick(e) {
  e.preventDefault();
  if (document.getElementById("context-menu").style.display == "block")
    hideMenu();
  else {
    var men = document.getElementById("context-menu")
    men.style.display = 'block';
    men.style.left = e.pageX + "px";
    men.style.top = e.pageY + "px";
  }
}

function power() {
  window.location.reload();
}

function refresh() {
  window.location.reload()
}
dragElement(document.querySelector("#brwin"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function openStartMenu() {
  document.getElementById("startmenu").style.display = 'block'
}
function closeStartMenu() {
  document.getElementById("startmenu").style.display = 'none'
}
document.body.onclick = e => {
  if (e.target == document.getElementById("startmenubtn") || e.target == document.getElementById("startmenu")) {
    openStartMenu()
  }
  else {
    closeStartMenu()
  }
}

//Might use this later, idk yet.
/*function checkWallpaper() {
    var wallpaper = getCookie("wallpaper");
    if (wallpaper == null) {
        document.body.style.backgroundImage = wallpaper;
    } else {
        document.body.style.backgroundImage = "url('./assets/css/wallpaper.jpg')";    }
}

function checkCookie(name) {
    var cookie = getCookie(name);
    if (cookie) {
        return true;
    } else {
        return false;
    }
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    }
}

checkWallpaper()
*/

//Code landmarks
//10/24/2022 300 Lines of code