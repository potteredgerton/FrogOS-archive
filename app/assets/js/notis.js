window.addEventListener('message', function(event) {
  eval(event.data);
});

const notifications = document.querySelector(".notifications")

function noti(title, content) {
  console.log(title + content);
  var notidiv = document.createElement("div");
  var notititle = document.createElement("div");
  var noticontent = document.createElement("div");
  notititle.classList.add("notititle")
  notititle.innerText = title;
  noticontent.innerText = content;
  notifications.appendChild(notidiv);
  notidiv.appendChild(notititle);
  notidiv.appendChild(noticontent);
};