function change_all() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var img = document.getElementById("image");
    if (image.src.match("blue")) {
        image.src = "img/kita.jpg";
    }
    else {
        image.src = "./img/blue.jpg";
    }
  }
  // detect - TEST
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (prefersDarkScheme.matches) {
    var img = document.getElementById("image");
    image.src = "./img/kita.jpg";
    document.body.classList.add("dark-mode");
    
  } else {
    document.body.classList.remove("dark-mode");
  }