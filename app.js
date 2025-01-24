let nombres = [];

const enterYourName = document.getElementById('inputEnterYourName');
const addButton = document.getElementById('buttonAñadir');
const friendList = document.getElementById('friendsList');
const randomFriend = document.getElementById('buttonSortear');
const resultado = document.getElementById('resultado');

addButton.addEventListener('click', function () {
  const nombre = enterYourName.value.trim();

  if (nombre) {
    nombres.push(nombre);
    actualizarLista();
    enterYourName.value = '';
  } else {
    alert('Por favor, ingresa un nombre válido.');
  }
});

function actualizarLista() {
  friendList.innerHTML = '';

  nombres.forEach(function (nombre) {
    const li = document.createElement('li');
    li.textContent = nombre;
    friendList.appendChild(li);
  });
}

randomFriend.addEventListener('click', function () {
  if (nombres.length > 0) {
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSecreto = nombres[indiceAleatorio];
    resultado.textContent = 'El amigo secreto es: ' + amigoSecreto;
  } else {
    alert('No hay nombres en la lista. Agrega algunos nombres primero.');
  }
});
