document.addEventListener("DOMContentLoaded", function() {
  // Agregamos el evento de submit al formulario
  document.getElementById("attendeeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    /* desocultar una vez se tenga backend
    
    // Obtener los datos del formulario
    const formData = new FormData(this);

    // Enviar los datos al servidor
    fetch('/submit-form', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Aquí puedes mostrar el mensaje de agradecimiento o hacer otras acciones
      console.log(data);
    })
    .catch(error => {
      console.error('Error al enviar los datos', error);
    });
  }); */

    // Mostrar el contenedor de agradecimiento y la imagen
    var thankYouContainer = document.getElementById("thankYouContainer");
    var closeButton = document.getElementById("closeButton");
    var thankYouImage = document.getElementById("thankYouImage");

    closeButton.addEventListener("click", function() {
      thankYouContainer.style.display = "none";
    });

    thankYouContainer.style.display = "flex";
  });
});



  document.getElementById("myButton").addEventListener("click", function() {
    alert("¡Haz hecho clic en el botón!");
  }); 
  //Boton para el cartel de WEBINAR en el banner.

  $(document).ready(function() {
    var selectCountry = $('#country'); // Selector del elemento select
  
    // Realizar solicitud a la API de Rest Countries
    $.ajax({
      url: 'https://restcountries.com/v3.1/all',
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        // Ordenar los países alfabéticamente
        response.sort(function(a, b) {
          var countryA = a.name.common.toUpperCase();
          var countryB = b.name.common.toUpperCase();
          if (countryA < countryB) {
            return -1;
          }
          if (countryA > countryB) {
            return 1;
          }
          return 0;
        });
  
        // Recorrer la respuesta y generar las opciones de país
        $.each(response, function(index, country) {
          var option = $('<option>', { value: country.name.common, text: country.name.common });
          selectCountry.append(option);
        });
      },
      error: function() {
        console.log('Error al obtener la lista de países.');
      }
    });
  });

  

    // Obtener el año actual
    const currentYear = new Date().getFullYear();
   
    document.getElementById("year").textContent = currentYear;
    ;