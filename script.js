// Funcionalidad JavaScript para el menú responsive
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Toggle del menú en dispositivos móviles
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace (para dispositivos móviles)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Cerrar menú al hacer clic fuera del menú
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Manejar el redimensionamiento de la ventana
    window.addEventListener('resize', function() {
        // Si la ventana se hace mayor que 600px, cerrar el menú móvil
        if (window.innerWidth > 600) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Añadir efecto de scroll al header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll hacia abajo
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll hacia arriba
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Manejar menús desplegables en dispositivos móviles
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');
        
        dropdownLink.addEventListener('click', function(e) {
            // Solo prevenir el comportamiento por defecto si no es un enlace real
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
            
            // En móviles, hacer toggle del menú desplegable
            if (window.innerWidth <= 600) {
                dropdown.classList.toggle('active-dropdown');
            }
        });
    });
});
