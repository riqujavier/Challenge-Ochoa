document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("attendeeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit-form', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Configura el encabezado
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          console.log(response);
          // Aquí puedes mostrar el mensaje de agradecimiento o hacer otras acciones
        } else {
          console.error('Error al enviar los datos', xhr.statusText);
        }
      }
    };

    // Serializa el objeto FormData para enviarlo en el cuerpo de la solicitud
    const serializedFormData = new URLSearchParams(formData).toString();
    xhr.send(serializedFormData);
 

 

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