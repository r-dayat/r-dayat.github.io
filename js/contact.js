$(function () {
  $("#contact-form input, #contact-form textarea, #contact-form button").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {},
    submitSuccess: function ($form, event) {
      event.preventDefault();
      var name = $("input#fullName").val();
      var email = $("input#email").val();
      var message = $("textarea#message").val();
      var fullname = name;
      if (fullname.indexOf(" ") >= 0) {
        fullname = name.split(" ").slice(0, -1).join(" ");
      }
      $this = $("#sendMessageBtn");
      $this.prop("disabled", true);
      $.ajax({
        url: "/php/contact.php",
        type: "POST",
        data: {
          fullname: fullname,
          email: email,
          message: message,
        },
        cache: false,
        success: function () {
          $("#success").html("<div class= 'alert alert-success'>");
          $("#success > .alert-success")
            .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $("#success > .alert-success").append("<strong>Your message has been send.</strong>");
          $("#success > .alert-success").append("</div>");
          $("#contact-form").trigger("reset");
        },
        error: function () {
          $("#success").html("<div class='alert alert-danger'>");
          $("#success > .alert.danger")
            .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times")
            .append("</button>");
          $("#success > .alert-danger").append(
            $("<strong>").text(
              "Sorry " + fullname + ", it seems that my mail server is not responding. Please try again later!"
            )
          );
          $("#success > .alert-danger").append("</div>");
          $("#contact-form").trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false);
          }, 1000);
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });
  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
$("#fullName").focus(function () {
  $("#success").html("");
});
