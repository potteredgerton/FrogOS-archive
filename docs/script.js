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

function checkRepo(repoUrl) {
  if (repoUrl.endsWith(".json")) {
    getRepo(repoUrl)
  }
  else {
    repoUrl = repoUrl + "/repo.json"
  }
}

try {
  checkRepo(repoUrl)
}
catch (error) {
  alert('Error: invalid repo URL.')
  console.log(error)
}

//Creates the app
function create_app(repo) {
  console.log(repo.repoName)
}

//Gets repo content and makes it work
function getRepo(repoUrl) {
  let repo = getJSON(repoUrl);
  console.log(repo)
  console.log("Repo JSON data: " + repo)
  console.log("Repo name is: " + repo.repoName)
}
}

/*
{
  "repoName": "my_repo",
  "repoId": "my_unique_repo_id",
  "repoVer": "1",
  "appCount": "1",
  "apps": [{
    "app1": [{
      "appName": "my_app_name",
      "appUrl": "https://example.com",
      "appIcon": "https://example.com/icon.png"
    }],
    "app2": [{
      "appName": "my_second_app_name",
      "appUrl": "https://example.org",
      "appIcon": "https://example.com/icon.png"
    }]
  }]
}
*/