function changeText() {
  var replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "Scroll down";

  document.getElementById("icon-up").style.display = "none";
  document.getElementById("icon-down").style.display = "block";

  var iconUp = document.getElementsByClassName("icon-up")[0];

  iconUp.onclick = function () {
    var button = document.getElementsByClassName("icon-down");
    button.style.display = "block";
  };
}

/* --------------------------- Meeting 11 | Button Like Dislike ------------------------- */
var btnLike = document.querySelector("#green");
var btnDislike = document.querySelector("#red");

if (btnLike) {
  btnLike.onclick = likeColor;
}
if (btnDislike) {
  btnDislike.onclick = dislikeColor;
}

function likeColor() {
  if (btnDislike.classList.contains("red")) {
    btnDislike.classList.remove("red");
  }

  this.classList.toggle("green");

  document.querySelector("body").style.color = "black";
  document.querySelector("body").style.backgroundColor = "white";
}

function dislikeColor() {
  if (btnLike.classList.contains("green")) {
    btnLike.classList.remove("green");
  }

  this.classList.toggle("red");

  document.querySelector("body").style.color = "white";
  document.querySelector("body").style.backgroundColor = "black";
}
  
/* --------------------------- Meeting 12 | Change Jumbotron Image ------------------------- */
function changeImage(element) {
  element.setAttribute(
    "src",
    "https://cdn3.iconfinder.com/data/icons/future-pack/64/037-virtual-reality-player-gamer-immersive-256.png"
  );
  // element.setAttribute("height", "300")
  // element.setAttribute("class", "jumbotron-img")
}

function changeImageBack(element) {
  element.setAttribute(
    "src",
    "https://cdn0.iconfinder.com/data/icons/occupation-002/64/programmer-programming-occupation-avatar-512.png"
  );
  // element.setAttribute("height", "300")
}

/* --------------------------- Challenge of Meeting 12 | Change Jumbotron Title ------------------------- */
function changeTitle(element) {
  element.innerHTML = "But I have some interesting stories!";
}

function changeTitleBack(element) {
  element.innerHTML = "Nathan, just an ordinary person";
}

var myList = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < myList.length; i++) {
      var span = document.createElement("span");
      span.innerHTML = "x";
      myList[i].appendChild(span).setAttribute("class", "close");
    }

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }

    function newElement() {
      // Create new list with the inputed value
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      // Check the inputed value
      if (inputValue === "" || inputValue === " ") {
        alert("Data tidak boleh kosong!");
      } else {
        document
          .getElementById("myUL")
          .appendChild(li)
          .setAttribute("class", "search-tags-item");
        li.innerHTML = inputValue;
      }
      // Clear text on the search bar
      document.getElementById("myInput").value = "";
      // Create button close
      var span = document.createElement("SPAN");
      span.innerHTML = "x";
      li.appendChild(span).setAttribute("class", "close");
      // Delete list
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
        };
      }
    }