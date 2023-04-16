// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Used to toggle schedule tabs
function openProgram(evt, day) {
    var i, x, tablinks;
    x = document.getElementsByClassName("cPrograma");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-border-theme", "");
    }
    document.getElementById(day).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-border-theme";
}