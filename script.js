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