// Change header on scroll
window.onscroll = function() {
  if (window.scrollY >= 20 || window.pageYOffset >= 20) {
    document.getElementsByTagName('header')[0].classList.add('scroll');
  } else {
    document.getElementsByTagName('header')[0].classList.remove('scroll');
  }
};