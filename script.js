let myHomebutton = document.getElementById("myButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myHomebutton.style.display = "block";
  } else {
    myHomebutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var post = document.getElementById("post");
post.addEventListener("click", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;

  var commentBoxValue = document.getElementById("comment-box").value;
  var list = document.createElement("li");
  var text = document.createTextNode(name + " : " + commentBoxValue);
  list.appendChild(text);
  document.getElementById("comments").appendChild(list);
  document.getElementById("comment-box").value = "";
  document.getElementById("name").value = "";
});
