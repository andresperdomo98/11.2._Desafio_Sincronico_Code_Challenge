document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('registro-form');

  formulario.addEventListener('submit', event => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    const data = {
      nombre,
      apellido,
      fechaNacimiento
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('Respuesta del servidor:', responseData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});
