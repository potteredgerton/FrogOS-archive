const app = document.querySelector("#br-os-apps");
const menu = document.querySelector("#os-ct-menu");
const tbarapps = document.querySelector("#tbarapps");
const taskbar = document.querySelector("#taskbar");
const batterydiv = document.querySelector("#batterydiv");
var ls = localStorage;

if (localStorage.getItem("repo")) {
  repo = JSON.parse(localStorage.getItem("repo"));
  if (repo.apps.length == 1) {
    createApp(repo.app.appName, repo.app.appIcon, repo.app.appId, repo.app.appUrl);
  } else {
    repo.apps.forEach(function(app) {
      createApp(app.appName, app.appIcon, app.appId, app.appUrl);
    });
  };
};

if (!localStorage.getItem("firstTime")) {
  localStorage.setItem("firstTime", true);
}

//createApp("Browser", "assets/images/apps/chromium.png", "browser", "/browser2");
//createApp("Tetris", "assets/images/apps/tetris.png", "tetris", "/tetris");
createApp("Weather", "assets/images/apps/weather.png", "weather", "/weather");
createApp("Camera", "assets/images/apps/camera.png", "camera", "/camera");
createApp("Calculator", "assets/images/apps/calculator.png", "calculator", "/calculator");
createApp("Tunee", "assets/images/apps/tunee.png", "tunee", "/tunee")
createApp("Terminal", "assets/images/apps/terminal.png", "term", "/terminal");
createApp("Settings", "assets/images/apps/settings.png", "settings", "/settings", "100", "100");

function loop() {
  var date = new Date();
  var sec = date.getSeconds();
  setTimeout(() => {
    setInterval(() => {
      datetime()
    }, 60 * 500);
  }, (60 - sec) * 1000);
}

function setTime(date, time) {
  document.getElementById('time').innerHTML = (time);
  document.getElementById('date').innerHTML = (date);
}

function datetime() {
  const val = new Date();
  let min = val.getMinutes();
  let vmin = min.toString();
  let hours = val.getHours();
  let day = val.getDate();
  let year = val.getFullYear();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[val.getMonth()];
  let weekday = weekdays[val.getDay()];
  let sess = "AM"
  if (hours == 0) {
    hours = 12
    sess = "AM"
  } else if (hours > 12) {
    hours = hours - 12;
    sess = "PM"
  }
  if (vmin.length == 1) {
    const time = hours + ":0" + min + " " + sess;
    const date = weekday + ", " + month + " " + day + ", " + year
    setTime(date, time)
  } else {
    const time = hours + ":" + min + " " + sess;
    const date = weekday + ", " + month + " " + day + ", " + year
    setTime(date, time)
  }
}

datetime();
loop();

function createApp(name, image, id, src, height, width) {
  let img = document.createElement("img");
  let p = document.createElement("p");
  let tbarapp = document.createElement("img");
  img.src = image;
  img.setAttribute("alt", name);
  tbarapp.src = image;
  tbarapp.id = id;
  tbarapp.onclick = () => window_open(src, image, name, id, height, width);
  p.innerText = name;
  tbarapps.appendChild(tbarapp);
}

function window_open(src, image, text, id, height, width) {
  let app = document.createElement("div");
  let appMain = document.createElement("div");
  let bar = document.createElement("div");
  let brand = document.createElement("div")
  let brandImage = document.createElement("img");
  let p = document.createElement("p");
  let min = document.createElement("img");
  let restore = document.createElement("img");
  let close = document.createElement("img");
  let square = document.createElement("img");
  let buttons = document.createElement("div");
  app.style.height = height + "%";
  app.style.width = width + "%";
  app.style.backgroundColor = "white";
  app.classList.add("br-os-window");
  bar.classList.add("window-bar");
  brand.classList.add("brand");
  buttons.classList.add("buttons");
  min.classList.add("modify");
  min.classList.add("minimize");
  restore.classList.add("modify");
  restore.classList.add("restore");
  restore.style.display = "none";
  close.classList.add("modify");
  close.classList.add("close")
  square.classList.add("modify");
  square.classList.add("maximize");
  min.src = "assets/images/icons/minimize.png";
  restore.src = "assets/images/icons/restore.png";
  close.src = "assets/images/icons/close.png";
  square.src = "assets/images/icons/square.png";
  min.onclick = () => minimize_window(app);
  close.onclick = () => close_window(app);
  restore.onclick = () => restore_window(app);
  square.onclick = () => maximise_window(app);
  appMain.innerHTML = "<iframe src=" + src + "></iframe>";
  brandImage.src = image;
  p.innerText = text;
  app.appendChild(bar);
  app.appendChild(appMain);
  bar.appendChild(brand);
  bar.appendChild(buttons);
  brand.appendChild(p);
  buttons.appendChild(min);
  buttons.appendChild(restore);
  buttons.appendChild(square);
  buttons.appendChild(close);
  document.body.appendChild(app);
  dragElement(app, bar);
}

function close_window(app) {
  app.classList.add("about-to-be-removed");
  app.classList.add("being-removed")
  setTimeout(() => app.parentElement.removeChild(app), 500);
}

function minimize_window(app) {
  app.parentElement.removeChild(app);
}

function maximise_window(app) {
  app.setAttribute("data-restoreX", app.style.left);
  app.setAttribute("data-restoreY", app.style.top);
  app.setAttribute("data-restoreW", app.style.width);
  app.setAttribute("data-restoreH", app.style.height);
  app.style.height = "100vh";
  app.style.width = "100vw";
  app.style.top = "";
  app.style.left = "";
  app.querySelector(".maximize").style.display = "none";
  app.querySelector(".restore").style.display = "inline";
}

function restore_window(app) {
  app.style.left = app.getAttribute("data-restoreX");
  app.style.top = app.getAttribute("data-restoreY");
  app.style.height = app.getAttribute("data-restoreH");
  app.style.width = app.getAttribute("data-restoreW");
  app.querySelector(".restore").style.display = "none";
  app.querySelector(".maximize").style.display = "inline";
}

function power() {
  window.location.reload();
}

function refresh() {
  window.location.reload()
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
  } else {
    closeStartMenu()
  }
}


function dragElement(element, elementHead) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (elementHead) {
    element.onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  };

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  };

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  };
};