var repoInput = document.getElementById("repoinput");

function getJSON(url) {
  var response;
  var xmlHttp;

  response = '';
  xmlHttp = new XMLHttpRequest();

  if (xmlHttp != null) {
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    response = xmlHttp.responseText;
  }

  return response;
}

function repo() {
  localStorage.setItem("repo", getJSON(repoInput.value));
}