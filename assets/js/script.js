//Elements
const apps = document.querySelector("#br-os-apps")
var menu = document.querySelector("#os-ct-menu")
const os_window = document.querySelector(".br-os-window")
const brand_window = document.querySelector(".brand")
const tbarapps = document.querySelector("#tbarapps")
const app_main = document.querySelector("#app-main")
const maximise = document.querySelector("#maximise")
const shorter = document.querySelector("#shorter")
const cross = document.querySelector("#cross")
const taskbar = document.querySelector("#taskbar")
/* Sound effects */
const click = new Audio("assets/music/click.wav")
const con = new Audio("assets/music/alert.wav")
const okay = new Audio("assets/music/positive.wav")
const no = new Audio("assets/music/negative.wav")
//Operations
/* Reseting window */
close(os_window)
/*
Creating Apps 
Format: 
create_app("App-display-name", "App-icon-url", "App-id NO CAPS OR SYMBOLS", "App URL. If it is a local file on your computer you will need to upload it somewhere like file.io")
*/
create_app("Browser", "assets/images/apps/chromium.png", "browser", "/browser")
create_app("Calculator", "assets/images/apps/calculator.png", "calculator", "/calculator")
create_app("Camera", "assets/images/apps/camera.png", "camera", "/camera")
create_app("Settings", "assets/images/apps/settings.png", "settings", "/settings")
function loop() {
  const date = new Date();
  const sec = date.getSeconds();
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
    }
    else if (hours > 12) {
      hours = hours - 12;
      sess = "PM"
    }
    const time = hours + ":0" + min + " " + sess;
    const date = month + "/" + day + "/" + year;
    document.getElementById('time').innerHTML = (time);
    document.getElementById('date').innerHTML = (date);
  }
  else {
    let hours = val.getHours();
    let day = val.getDate();
    let month = val.getMonth() + 1;
    let year = val.getFullYear();
    let sess = "AM"
    if (hours == 0) {
      hours = 12
      sess = "AM"
    }
    else if (hours > 12) {
      hours = hours - 12;
      sess = "PM"
    }
    const time = hours + ":" + min + " " + sess;
    const date = month + "/" + day + "/" + year;
    document.getElementById('time').innerHTML = (time);
    document.getElementById('date').innerHTML = (date);
  }
}
//Nasa APOD
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = "ExY2DF0hrHkIlzNaaJboNXxGkiksfybTvubFBgg5"
const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${api_key}`)
    const apod = await response.json()
    displayData(apod)
  } catch (error) {
    console.log("Nasa APOD is either down or NASA is blocking your computer from accessing it.")
  }
}
const displayData = data => {
  document.getElementById("br-os-container").style.backgroundImage = "url('" + data.hdurl + "')";
}
fetchNASAData()
//App creation function
function create_app(name, image, id, src) {
  let app = document.createElement("div")
  app.classList.add("app")
  app.id = id
  app.onclick = () => window_open(id, src, image)
  app.oncontextmenu = e => {
    click.play()
    open_menu(e, id)
  }
  let img = document.createElement("img");
  img.src = image
  img.setAttribute("alt", name)
  let p = document.createElement("p")
  let tbarapp = document.createElement("img")
  tbarapp.src = image
  tbarapp.id = id
  tbarapp.onclick = () => window_open(id, src);
  p.innerText = name
  app.appendChild(img)
  app.appendChild(p)
  apps.appendChild(app)
  tbarapps.appendChild(tbarapp)
}
//Window open function
function window_open(id, src) {
  click.play()
  brand_window.innerHTML = ""
  app_main.innerHTML = "<iframe src=" + src + "></iframe>"
  init_window()
  let main = document.querySelector("#" + id)
  let img = document.createElement("img")
  img.src = main.childNodes[0].src
  img.setAttribute("alt", main.childNodes[0].getAttribute("alt"))
  img.setAttribute("alt", main.childNodes[0].getAttribute("alt"))
  let p = document.createElement("p")
  p.innerText = main.childNodes[1].innerText
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
//Start menu
function startmenu() {
  const newmenu = document.createElement("div");
  newmenu.id = "startmenu"
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
    os_window
  }
}
//Window minimize function
function minimize_window() {
  os_window.style.display = "none"
}
//Window maximize function
function maximise_window() {
  open(shorter)
  close(maximise)
  window.restoreX = os_window.style.left
  window.restoreY = os_window.style.top
  os_window.style.top = 0
  os_window.style.left = 0
  os_window.style.width = "100%"
  os_window.style.height = "100vh"
}
//Window un-maximize function
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
function admin_access(id) {
  con.play()
  vex.dialog.confirm({
    message: "Would you like to give admin access to this app?",
    callback: function(value) {
      if (value) {
        okay.play()
        window_open(id)
      } else {
        no.play()
        vex.dialog.alert({
          message: "Admin permissions declines"
        })
      }
    }
  })
}
function remove_app(id) {
  con.play()
  vex.dialog.confirm({
    message: "Are you sure to remove this app?",
    callback: function(value) {
      if (value) {
        okay.play()
        document.querySelector("#" + id).remove()
      } else {
        no.play()
        vex.dialog.alert({
          message: "App was not removed"
        })
      }
    }
  })
}
//Anonymous functions in Event Listeners
window.onclick = e => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active")
  }
}
//Battery function
navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
  }

  battery.addEventListener("levelchange", () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log(`Battery level: ${battery.level * 100}%`);
  }

  battery.addEventListener("chargingtimechange", () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log(`Battery charging time: ${battery.chargingTime} seconds`);
  }

  battery.addEventListener("dischargingtimechange", () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
  }
});
//Window draggability
dragElement(document.querySelector(".br-os-window"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
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