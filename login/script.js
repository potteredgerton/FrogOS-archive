const form = document.getElementById("loginform")
const input = document.getElementById("login")
const username = document.getElementById("name")

const usernam = "s"
const password = "s"

function login() {
  if (input.value === usernam) {
    sessionStorage.setItem("login", "true");
  }
}