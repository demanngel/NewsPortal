document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector('.sidebar-toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('.main');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        header.classList.toggle('open');
        mainContent.classList.toggle('open');
        toggleBtn.classList.toggle('open');
    });
});
