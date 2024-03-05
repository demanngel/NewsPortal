document.addEventListener('DOMContentLoaded', function() {

    const sectionTitles = document.querySelectorAll('.section-title');

    sectionTitles.forEach(function(title) {
        title.addEventListener('click', function() {

            const content = title.nextElementSibling;

            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const createCategoryForm = document.getElementById('createCategoryForm');
    const categoryNameInput = document.getElementById('categoryName');
    const categoryDescriptionInput = document.getElementById('categoryDescription');

    createCategoryForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const categoryName = categoryNameInput.value.trim();
        const categoryDescription = categoryDescriptionInput.value.trim();

        if (!categoryName) {
            alert('Введите название категории');
            return;
        }

        try {
            const response = await fetch('/api/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: categoryName, description: categoryDescription })
            });

            if (!response.ok) {
                throw new Error('Ошибка при создании категории');
            }

            categoryNameInput.value = '';
            categoryDescriptionInput.value = '';

            // Здесь вы можете добавить дополнительный код в случае успешного создания категории, например, обновление списка категорий
            console.log('Категория успешно создана');
        } catch (error) {
            console.error('Ошибка при создании категории:', error);
            // Здесь вы можете добавить код для обработки ошибки создания категории, например, отображение сообщения об ошибке пользователю
        }
    });
});

