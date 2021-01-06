$(document).ready(function () {
  function scrollSmooth() {
    $(".nav-link").on("click", function () {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            // scrollTop: $(hash).offset().top,
            scrollTop: $(hash).offset().top - 81,
          },
          1000,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  }

  // function scrollNav() {
  //   const navClass = $("nav");
  //   // $(window).scroll(function () {
  //   //   navClass.addClass("navbar-scrolled", $(this).scrollTop() > navClass.height());
  //   // });
  // }

  function scrollBottom() {
    const navClass = $("nav");
    // ===== Scroll to Top ====
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 50) {
        // If page is scrolled more than 50px
        navClass.addClass("navbar-scrolled");
        $(".arrow").fadeIn(200); // Fade in the arrow
      } else {
        navClass.removeClass("navbar-scrolled");
        $(".arrow").fadeOut(200); // Else fade out the arrow
      }
    });
    $(".arrow").click(function () {
      // When arrow is clicked
      $("body,html").animate(
        {
          scrollTop: 0, // Scroll to top of body
        },
        500
      );
    });
  }

  function scrollSkill() {
    // $(window).scroll(function (event) {
    //   var scroll = $(window).scrollTop();
    //   $(".skills-bar .bar .info span").toggleClass("showTextAnimate", scroll >= $("#skills").offset().top);
    //   $(".skills-bar .bar .progress-line").toggleClass("animateProgress", scroll >= $("#skills").offset().top);
    //   $(".bar .progress-line span").toggleClass("animateProgressSpan", scroll >= $("#skills").offset().top);
    //   $(".bar .progress-line span").toggleClass("animateProgressLine", scroll >= $("#skills").offset().top);
    // });
    // $(window).scroll();

    $(window).scroll(function () {
      if ($(window).scrollTop() == $("#skills").offset().top || $("#nav-skills").click()) {
        // setTimeout(function () {
        //   $(".skills-bar .bar .info span").toggleClass("showTextAnimate");
        //   $(".skills-bar .bar .progress-line").toggleClass("animateProgress");
        //   $(".bar .progress-line span").toggleClass("animateProgressSpan");
        //   $(".bar .progress-line span").toggleClass("animateProgressLine");
        // }, 2000);
        $(".skills-bar .bar .info span").toggleClass("showTextAnimate");
        $(".skills-bar .bar .progress-line").toggleClass("animateProgress");
        $(".bar .progress-line span").toggleClass("animateProgressSpan");
        $(".bar .progress-line span").toggleClass("animateProgressLine");
      }
    });
  }

  // scrollNav();
  scrollSmooth();
  scrollBottom();
  // scrollSkill();
  // setTimeout(scrollSkill, 5000);
});
