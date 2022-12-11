var repoUrl = "https://frogos.app/docs/repo.json"

function getJSON(url) {
  var resp;
  var xmlHttp;

  resp = '';
  xmlHttp = new XMLHttpRequest();

  if (xmlHttp != null) {
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    resp = xmlHttp.responseText;
  }

  return resp;
}

function repo() {
  var input = document.getElementById("repo");
  var jso = getJSON(input.value);
  localStorage.setItem("repo", JSON.stringify(jso));
}