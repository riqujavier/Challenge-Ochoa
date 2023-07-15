document.getElementById("attendeeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Aquí puedes agregar el código para enviar los datos del formulario al servidor
    // por medio de AJAX, fetch, o cualquier otra técnica que prefieras.
  })

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