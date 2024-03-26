var iconSun = document.getElementById('iconSun');
var iconMoon = document.getElementById('iconMoon');

// Inicia com o ícone do sol visível e o ícone da lua invisível
iconSun.style.display = 'block';
iconMoon.style.display = 'none';

iconSun.onclick = function () {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        iconSun.style.display = 'none'; // Esconde o ícone do sol
        iconMoon.style.display = 'block'; // Mostra o ícone da lua
    } else {
        iconSun.style.display = 'block'; // Mostra o ícone do sol
        iconMoon.style.display = 'none'; // Esconde o ícone da lua
    }
}

iconMoon.onclick = function () {
    document.body.classList.remove('light-theme');
    iconSun.style.display = 'block'; // Mostra o ícone do sol
    iconMoon.style.display = 'none'; // Esconde o ícone da lua
}