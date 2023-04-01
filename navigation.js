$(document).ready(function() {
  $('#menu-container').click(function() {
    $('#hamburger-container').toggleClass('open');
    $('#menu').toggleClass("menu-open", function() {
      $(this).remove();
    });
    $('#menu-list').toggleClass("menu-open", function() {
      $(this).remove();
    });
    $('.menu-item').toggleClass("menu-open", function() {
      $(this).remove();
    });
    $('#menu-underline-container').toggleClass("menu-open", function() {
      $(this).remove();
    });
    $('.menu-underline').toggleClass("menu-open", function() {
      $(this).remove();
    });
    $('#body').toggleClass("overflow-disable", function() {
      $(this).remove();
    });
    $('#menu-screen-darkener').toggleClass("darken", function() {
      $(this).remove();
    });
  });
});