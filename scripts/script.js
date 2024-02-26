window.addEventListener('load', () => {

    const categoryPosition = document.querySelector('.summary__button');

    fetch('../data.json')
        .then(result => result.json())
        .then(data => {
            data.forEach(category => {
                categoryPosition.insertAdjacentHTML('beforebegin',
                    `<p class="summary__category ${category.class}">${category.category}<span>${category.score} <span>/ 100</span></span></p>`);
            });
        });

    fetch('../data.json')
        .then(result => result.json())
        .then(data => {
            let totalScore = 0;
            data.forEach(category => {
                totalScore += category.score;
            });
            totalScore = Math.round(totalScore / 4);

            const counterElement = document.querySelector('.score__value');

            let currentScore = 0;

            const interval = setInterval(() => {
                currentScore++;
                counterElement.innerHTML = `${currentScore} <span>of 100</span>`;
                if (currentScore >= totalScore) {
                    clearInterval(interval);
                }
            }, 10);
        });
});