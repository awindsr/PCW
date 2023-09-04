window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.feature');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var position = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    if (position.top < windowHeight) {
      element.style.opacity = 1;
    } else {
      element.style.opacity = 0;
    }
  }
});