$(function () {
    $(document).scroll(function () {
      var $nav = $(".salamnav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });