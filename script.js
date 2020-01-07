
var images = ["images/gallery5.jpg", "images/gallery3.jpg", "images/gallery6.jpg", "images/gallery2.jpg"];
dotList = document.getElementsByClassName("dot");
var index = 0;
var wasVisited;

function changeImage(num) {
  console.log("Starting at " + index);
  var image = document.getElementById("slideshow-image");
  if (num == -1) {
    index = index - 1;
    if (index < 0) {
      image.src = images[images.length + index];
      changeDot(index);
    }

    else {
      changeDot(index);
      image.src = images[index];
    }
  }
  else {
    index = index + 1;
    if (index < 0) {
      image.src = images[images.length + index];
      changeDot(index);
    }

    else {
      changeDot(index);
      image.src = images[index];
    }
  }

  if (index == 3) {
    index = -1;
  }
  if (index == -3) {
    index = 1;
  }

  return false;
}

function changeDot(index) {
  for (var i = 0; i<=dotList.length-1; ++i) {
    if (index < 0){
      if (i != dotList.length+index) {
        dotList[i].src = "images/non-active-dot.svg";
      }
      else {
        dotList[i].src = "images/active-dot.svg";
      }
    }
    else {
      if (i != index) {
        dotList[i].src = "images/non-active-dot.svg";
      }
      else {
        dotList[i].src = "images/active-dot.svg";
      }
    }
  }
}

function mobileNav() {

    var dropdown = document.getElementById("mobile-dropdown");
    var list = document.getElementById("listItems");
    var button = document.getElementById("dropdown-button");
    console.log(button);

    if (dropdown.style.visibility === "visible") {
        dropdown.style.visibility = "hidden";
        dropdown.style.background= "rgba(255, 255, 255, 0)";
        dropdown.style.transition = "1s ease";
        list.style.visibility ="hidden";
        button.src = "images/menu-button.svg";
    }

    else {
        dropdown.style.visibility = "visible";
        dropdown.style.transition = "1s ease";
        dropdown.style.background= "rgba(255, 255, 255, .95)";
        list.style.visibility ="visible";
        button.src = "images/nav-close-button.svg";
    }

    return false;
}

function subscriptionPopup() {
    var promotion = document.getElementById("promotional");
    promotion.style.visibility = "visible";
    promotion.style.transitionDelay = "1.5s";
    var overlay = document.getElementById("promotionOverlay");
    overlay.style.visibility = "visible";
    overlay.style.transitionDelay = "1.5s";
    return true;
}

function closePromo() {
    var promotion = document.getElementById("promotional");
    var overlay = document.getElementById("promotionOverlay");
    promotion.style.display = "none";
    overlay.style.display = "none";
    overlay.style.transitionDelay = "0s";
    promotion.style.transitionDelay = "0s";
    return false;
}

function transition() {
    var promotion = document.getElementById("promotional");
    var overlay = document.getElementById("promotionOverlay");
    if (promotion.style.visibility === "hidden") {
        return false;
    }
    else {
        promotion.style.transition = "0s ease";
    }
}
