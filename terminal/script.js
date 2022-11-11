const textarea = document.getElementById('term');

function print(i) {
  textarea.value = textarea.value + i + "\nC:\\>"
}

function print2(i) {
  textarea.value = textarea.value + i
}

let greeting = 'FrogOS beta 0.65\n'

print2(greeting + "\nC:\\>")

textarea.addEventListener("keydown", (event) => {
  if (event.code !== "Enter") {
    return;
  }
  let input = textarea.value.substr(textarea.value.lastIndexOf(">") + 1).toLowerCase();
  //Print command
  if (input.substr(0, 5) == "print") {
    print("\n" + input.substr(6))
  }
  //Help command
  if (input.substr(0, 4) == "help") {
    if (input.length == "4") {
      let output = '\nFor a more in-depth description type "help" followed by a commands name.\nPrint\nPrint any text into the console.\n\nColor\nChanges text and background colors of the terminal'
      print(output)
    }
    //Specific help commands
    if (input == "help print") {
      let hprint = '\nType "print" followed by the text you like to be printed to the console'
      print(hprint)
    }
  }
})