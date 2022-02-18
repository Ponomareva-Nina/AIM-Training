const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const board = document.querySelector('#board');
let time = 0;
let timeCounter = document.querySelector('#time');
let score = 0;
let colors = ['#16D9E3', '#f89696', '#acb844', '#824f86', '#e2d241', '#fafdff', '#f580e1'];


startBtn.addEventListener('click', () => {
    screens[0].classList.add('up');
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        screens[1].classList.add('up');
        time = parseInt(event.target.getAttribute('data-time'));
        startGame();
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    timeCounter.innerHTML = `00:${time}`;
    createRandomCircle();
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        timeCounter.innerHTML = `00:${current}`;
    }
}

function finishGame() {
    timeCounter.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`;
}

function createRandomCircle() {
    let circle = document.createElement('div');

    let size = getRandomNumber(10, 60);
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.background = randomColor();

    board.append(circle);

}


function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
