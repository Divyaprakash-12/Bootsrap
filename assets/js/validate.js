
  $(document).ready(function () {
      $(".comments").validate({
          rules: {
              'name': {
                  required: true,
                  minlength: 2,
                  maxlength: 15,
                  pattern: /^[A-Za-z ]+$/
              },
              'ph_no': {
                  required: true,
                  minlength: 10,
                  pattern: /^[0-9]$/
              },
              'mail': {
                  required: true,
                  mail: true,
                  pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/
              }
          },
          messages: {
              'name': {
                  required: "<br> Please enter a Username.",
                  minlength: "<br> Username is too small",
                  maxlength: "<br> Username is too large",
                  pattern: "<br> Username must contain only alpabets"
              },
              'ph_no': {
                  required: "<br> Please enter a valid Mobile number.",
                  minlength: "<br> Mobile number must contain 10 digits",
                  pattern: "<br> Mobile number must be in the format"
              },

              'mail': {
                  required: "<br> Please enter an Email address",
                  mail: "<br> Please enter a valid email address",
                  pattern: "<br> E-mail address should be in proper format"
              }
          }
      });
  });
