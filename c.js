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