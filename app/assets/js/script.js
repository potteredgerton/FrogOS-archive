const app = document.querySelector("#br-os-apps");
const menu = document.querySelector("#os-ct-menu");
const tbarapps = document.querySelector("#tbarapps");
const taskbar = document.querySelector("#taskbar");
const batterydiv = document.querySelector("#batterydiv");

var repo = {
  "repoName": "Example Repo",
  "repoId": "example.com",
  "repoVer": "1",
  "app": {
    "appName": "Visual Studio Code",
    "appId": "vscode",
    "appUrl": "https://mathspace.gq/prefix/aHR0cHM6Ly92c2NvZGUuZGV2/",
    "appIcon": "https://e1.pngegg.com/pngimages/947/906/png-clipart-clay-os-6-a-macos-icon-visual-studio-code-blue-and-white-illustration.png"
  }
}

if (repo) {
  create_app(repo.app.appName, repo.app.appIcon, repo.app.appId, repo.app.appUrl);
};

//create_app("Browser", "assets/images/apps/chromium.png", "browser", "/browser2");
//create_app("Tetris", "assets/images/apps/tetris.png", "tetris", "/tetris");
create_app("Weather", "assets/images/apps/weather.png", "weather", "/weather");
create_app("Camera", "assets/images/apps/camera.png", "camera", "/camera");
create_app("Calculator", "assets/images/apps/calculator.png", "calculator", "/calculator");
create_app("Terminal", "assets/images/apps/terminal.png", "term", "/terminal");
create_app("Settings", "assets/images/apps/settings.png", "settings", "/settings", "100", "100");

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

function create_app(name, image, id, src, height, width) {
  let img = document.createElement("img");
  let p = document.createElement("p");
  let tbarapp = document.createElement("img");
  img.src = image;
  img.setAttribute("alt", name);
  tbarapp.src = image;
  tbarapp.id = id;
  tbarapp.onclick = () => window_open(src, image, name, height, width);
  p.innerText = name;
  tbarapps.appendChild(tbarapp);
}

function window_open(src, image, text, height, width) {
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
  app.classList.add("br-os-window");
  bar.classList.add("window-bar");
  brand.classList.add("brand");
  buttons.classList.add("buttons");
  min.classList.add("modify");
  restore.classList.add("modify");
  close.classList.add("modify");
  square.classList.add("modify");
  square.classList.add("square");
  min.src = "assets/images/icons/minimize.png";
  restore.src = "assets/images/icons/restore.png";
  close.src = "assets/images/icons/close.png";
  square.src = "assets/images/icons/square.png";
  min.onclick = minimize_window();
  close.onclick = close_window(bar);
  restore.onclick = shorter_window();
  square.onclick = maximise_window();
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
  app.addEventListener("click", checkSnap);
}

function checkSnap(e) {
  console.log(e.style.left)
  if (e.style.left) {
    //
  }
}

function close_window(a) {
  //
  return a;
}

function minimize_window(d) {
  //
  return d;
}

function maximise_window(t) {
  /*t.querySelector(".minimize").style.display = "inline";
  t.querySelector(".maximise").style.display = "none";
  t.style.top = 0;
  t.style.left = 0;
  t.style.width = "100%";
  t.style.height = "100vh";*/
}

function shorter_window() {
  /*open(maximise)
  close(shorter)
  t.style.top = os_window.restoreY
  t.style.left = os_window.restoreX
  t.style.width = "50%"
  t.style.height = "50%"*/
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
  }
  else {
    closeStartMenu()
  }
}


function dragElement(element, elementHead) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (elementHead) {
    element.onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
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
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}