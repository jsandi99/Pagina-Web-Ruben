function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verifica las credenciales
    if (username === 'ruben' && password === 'scoutsmolamazo') {
        window.location.href = 'principal.html'; // Redirecciona a otra página
    } else {
        alert('Credencials incorrectes. Torna-ho a intentar.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    generateDatabaseEntries();
});

function generateDatabaseEntries() {
    const databaseContent = document.getElementById("database-content");

    for (let i = 1; i <= 30; i++) {
        const entry = document.createElement("div");
        entry.classList.add("database-entry");

        const id = document.createElement("span");
        id.classList.add("entry-id");
        id.textContent = i;

        const title = document.createElement("span");
        title.classList.add("entry-title");
        title.textContent = generateRandomTitle();

        const amount = document.createElement("span");
        amount.classList.add("entry-amount");
        amount.textContent = generateRandomAmount();

        entry.appendChild(id);
        entry.appendChild(title);
        entry.appendChild(amount);

        databaseContent.appendChild(entry);
    }
}

function generateRandomTitle() {
    const titles = ["Subvencions Acció Scout", "Boicot ADO", "Infiltració Taper (Eva)", "Hackeig Dossier Digital", "Sopar de Scouts", "Missa del Gall"];
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
}

function generateRandomAmount() {
    const randomAmount = Math.floor(Math.random() * 100000) + 1000; // Rango: 1000 - 100000
    return randomAmount.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
}

document.addEventListener("DOMContentLoaded", function () {
    // Array que contiene el nombre de las imágenes en la carpeta "mapes"
    const imagenes = ["mapa1.png", "mapa2.png", "mapa3.png", "mapa4.png", "mapa5.png"];
    var audioPlayer = document.getElementById('audioPlayer');

    // Elementos de la imagen y el contador
    const imagenElemento = document.getElementById("imagen");
    const contadorElemento = document.getElementById("contador");

    let indiceImagenActual = 0;
    let tiempoRestante = 5; // 10 segundos inicialmente

    // Función para cambiar la imagen, reproducir el sonido y actualizar el contador
    function cambiarImagen() {
        imagenElemento.src = "mapes/" + imagenes[indiceImagenActual];

        // Reproducir el sonido al cambiar la imagen
        audioPlayer.play();

        // Reiniciar el tiempo restante
        tiempoRestante = 30;

        // Incrementar el índice para la próxima imagen
        indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    }

    // Función para actualizar y mostrar el contador
    function actualizarContador() {
        contadorElemento.textContent = `Cambiará en ${tiempoRestante} segundos`;

        // Si quedan 2 segundos, hacer que la imagen parpadee
        if (tiempoRestante === 2) {
            imagenElemento.classList.add("parpadeo");
        } else {
            imagenElemento.classList.remove("parpadeo");
        }
    }

    // Función para contar el tiempo y actualizar el contador
    function contarTiempo() {
        tiempoRestante -= 1;

        if (tiempoRestante <= 0) {
            cambiarImagen();
        }

        actualizarContador();
    }

    // Llamar a la función inicialmente
    cambiarImagen();

    // Establecer la repetición cada segundo (1000 milisegundos)
    setInterval(contarTiempo, 1000);
});

function verificarContraseña() {
    var contraseñaIngresada = document.getElementById('password').value;
    
    // Reemplaza 'contraseña123' con tu contraseña correcta
    var contraseñaCorrecta = '50600';

    if (contraseñaIngresada === contraseñaCorrecta) {
      // Contraseña correcta, redirige a la otra página
      window.location.href = 'facturesOcultes.html';
    } else {
      // Contraseña incorrecta, puedes mostrar un mensaje de error o realizar otra acción
      alert('Contraseña incorrecta. Intenta de nuevo.');
    }
  }

  function verificarContraseña2() {
    var contraseñaIngresada = document.getElementById('password').value;
    
    // Reemplaza 'contraseña123' con tu contraseña correcta
    var contraseñaCorrecta = 'salvemaminyonsperdoneu';

    if (contraseñaIngresada === contraseñaCorrecta) {
      // Contraseña correcta, redirige a la otra página
      window.location.href = 'informacioOcultes.html';
    } else {
      // Contraseña incorrecta, puedes mostrar un mensaje de error o realizar otra acción
      alert('Contraseña incorrecta. Intenta de nuevo.');
    }
  }