document.getElementById("attendeeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Aquí puedes agregar el código para enviar los datos del formulario al servidor
    // por medio de AJAX, fetch, o cualquier otra técnica que prefieras.
  })
  // Obtener el año actual
  const currentYear = new Date().getFullYear();
  // Asignar el año actual al elemento de HTML
  document.getElementById("year").textContent = currentYear;
  ;
  document.getElementById("myButton").addEventListener("click", function() {
    alert("¡Haz hecho clic en el botón!");
  }); 
  //Boton para el cartel de WEBINAR en el banner.