'use strict';
$(document).ready(function(){

  $('.nav-items.1').click(function() {
    $('html, body').animate({
      scrollTop: $('#home-wrapper').offset().top
    }, 0);
  });
  $('.nav-items.2').click(function() {
    $('html, body').animate({
      scrollTop: $('.about-content').offset().top
    }, 0);
  });
  $('.nav-items.3').click(function() {
    $('html, body').animate({
      scrollTop: $('#owner').offset().top
    }, 0);
  });
  $('.nav-items.4').click(function() {
    $('html, body').animate({
      scrollTop: $('#portfolio-header').offset().top
    }, 0);
  });
  $('.nav-items.5').click(function() {
    $('html, body').animate({
      scrollTop: $('footer').offset().top
    }, 0);
  });
});
