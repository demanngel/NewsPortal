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

const loginBtn = document.querySelector('.login-btn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeBtn');
loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
});
closeBtn.addEventListener('click', function() {
    loginModal.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

fetch('/api/categories')
    .then(response => response.json())
    .then(categories => {
        const categoriesList = document.getElementById('category-list');
        categories.forEach(category => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = category.name;
            link.href = `category.html`; // Предполагается, что у категорий есть уникальные идентификаторы
            listItem.appendChild(link);
            categoriesList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Ошибка при получении списка категорий:', error));

