document.addEventListener('DOMContentLoaded', function() {
    var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');

    dropdownSubmenus.forEach(function(submenu) {
        submenu.addEventListener('click', function(e) {
            e.stopPropagation();
            var submenuDropdown = this.querySelector('.dropdown-menu');
            submenuDropdown.classList.toggle('show');
        });
    });

    document.addEventListener('click', function() {
        dropdownSubmenus.forEach(function(submenu) {
            var submenuDropdown = submenu.querySelector('.dropdown-menu');
            submenuDropdown.classList.remove('show');
        });
    });
});

function cotizarSeguro(tipoSeguro) {
    let telefono = "5491138523400"; 
    let mensaje = `Hola! Quería contratar el seguro ${tipoSeguro} `;
    let url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

function cotizarIndex(mensaje) {
    let telefono = "5491138523400"; 
    let mensajei = ` ${mensaje} `;
    let url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajei)}`;
    window.open(url, '_blank');
}