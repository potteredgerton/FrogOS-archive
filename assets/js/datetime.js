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
  const cmin = min.toString();
  if (cmin.length == 1) {
    const hours = val.getHours();
    const day = val.getDate();
    const month = val.getMonth() + 1;
    const year = val.getFullYear();
    const time = hours + ":0" + min;
    const date = month + "/" + day + "/" + year;
    console.log("The time is " + time);
    console.log("The date is " + date);
    document.getElementById('time').innerHTML = (time);
    document.getElementById('date').innerHTML = (date);
  }
  else {
    const hours = val.getHours();
    const day = val.getDate();
    const month = val.getMonth() + 1;
    const year = val.getFullYear();
    const time = hours + ":" + min;
    const date = month + "/" + day + "/" + year;
    console.log("The time is " + time);
    console.log("The date is " + date);
    document.getElementById('time').innerHTML = (time);
    document.getElementById('date').innerHTML = (date);
  }
}



