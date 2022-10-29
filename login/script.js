const form = document.getElementById("loginform")
const input = document.getElementById("login")
const username = document.getElementById("name")

document.cookie = "split=Hello!"

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

username = getCookie('username')

console.log(username)