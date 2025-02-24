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