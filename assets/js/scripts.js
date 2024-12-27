// Window scroll
$(window).on("scroll", function(){
  var scrollTop = $(window).scrollTop();
  if(scrollTop >= 100){
    $('body').addClass('fixed-header');
  } else {
    $('body').removeClass('fixed-header');
  }
});

// Document Ready
$(document).ready(function () {
  // Typing animation
  new Typed('#type-it', {
    strings: ['Full-Stack Developer Jr', 'Mechatronics', 'Freelancer'],
    typeSpeed: 100,
    loop: true
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    items:2,
    margin:30,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
    }
  });

  // One Page Scroll
  $('a[data-scroll-nav]').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $.scrollTo(target, 800, {offset: {top:-70}});
  });
});

// Data footer
document.addEventListener("DOMContentLoaded", function() {
  var year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
});

// Manipular o Envio menssagem e o Pop-up
document.getElementById("contactForm").addEventListener("submit", async function (event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  const form = event.target;
  const formData = new FormData(form);
  const responseElement = document.getElementById("formResponse");

  try {
    const response = await fetch("https://formspree.io/f/myzzezak", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // Mensagem de sucesso
      responseElement.style.display = "block";
      responseElement.className = "alert alert-success";
      responseElement.textContent = "Mensagem enviada com sucesso!";
      form.reset(); // Limpa o formulário após o envio
    } else {
      throw new Error("Erro ao enviar o formulário.");
    }
  } catch (error) {
    // Mensagem de erro
    responseElement.style.display = "block";
    responseElement.className = "alert alert-danger";
    responseElement.textContent = "Erro ao enviar a mensagem. Tente novamente.";
  }

  // Esconde a mensagem após 5 segundos
  setTimeout(() => {
    responseElement.style.display = "none";
  }, 5000);
});
