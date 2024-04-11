 // When the user scrolls the page, execute scrollFunction
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Calculate how far the user has scrolled
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  // Update the width of the progress bar
  document.getElementById("myBar").style.width = scrolled + "%";
}
