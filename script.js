function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector(".hour-time").innerText = h;
    document.querySelector(".minute-time").innerText = m;
    document.querySelector(".second-time").innerText = s;
    setTimeout(startTime, 1000);
}

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

document.querySelector("body").addEventListener("load", startTime())