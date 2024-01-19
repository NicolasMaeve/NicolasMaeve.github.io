$(document).ready(function () {
  const dialog = document.querySelector("dialog");

  $(function () {
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function () {
      var nowScrollTop = $(this).scrollTop();
      if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
        if (nowScrollTop > lastScrollTop) {
          $("#navbar").removeClass("is-fixed-top");
          $("body").removeClass("has-navbar-fixed-top");
        } else {
          $("#navbar").addClass("is-fixed-top");
          $("body").addClass("has-navbar-fixed-top");
        }
        lastScrollTop = nowScrollTop;
      }
    });
  });
})

/* navbar responsivity */

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {
      
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
      
    });
  });

});
