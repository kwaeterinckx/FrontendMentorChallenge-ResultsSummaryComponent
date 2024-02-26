const categoryPosition = document.querySelector('.summary__button');

fetch('../data.json')
    .then(result => result.json())
    .then(data => {
        data.forEach(category => {
            categoryPosition.insertAdjacentHTML('beforebegin',
                `<p class="summary__category ${category.class}">${category.category}<span>${category.score} <span>/ 100</span></span></p>`);
        });
    });
