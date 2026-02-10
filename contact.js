
    document.addEventListener("DOMContentLoaded", function () {

        emailjs.init("FOKgXqoxrokjf3LCT");
      
        const form = document.querySelector(".contact-form");
      
        form.addEventListener("submit", function (e) {
          e.preventDefault();
      
          emailjs.sendForm(
            "kaorywebstudio@gmail.com",
            "template_kws",
            form
          ).then(
            function () {
              console.log("enviado");
      
              // RESET 
              e.target.reset();
            },
            function (error) {
              console.log("erro", error);
            }
          );
        });
      });
      