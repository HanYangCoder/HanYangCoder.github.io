window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".main-nav-menu").classList.add("scrolled");
  } else {
    document.querySelector(".main-nav-menu").classList.remove("scrolled");
  }
}