document.addEventListener('DOMContentLoaded', function () {
    // Função para abrir/fechar o menu responsivo
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        const nav = document.querySelector('nav'); 
        nav.classList.toggle('active'); 
        this.classList.toggle('active'); 
    });
  
    // Fecha o menu quando um item do menu é clicado (para experiência mobile)
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            const nav = document.querySelector('nav');
            const menuToggle = document.querySelector('.menu-toggle');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
  });
  