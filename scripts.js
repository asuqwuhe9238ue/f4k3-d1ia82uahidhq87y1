document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".container-document").addEventListener("click", () => {
  document.body.classList.toggle("flip1");
});

document.querySelector(".container-document-2").addEventListener("click", () => {
  document.body.classList.toggle("flip1");
});

document.querySelector(".container-document-3").addEventListener("click", () => {
  document.body.classList.toggle("flip2");
});

document.querySelector(".container-document-4").addEventListener("click", () => {
  document.body.classList.toggle("flip2");
});
  let timerInterval; // сюда сохраним активный интервал

function startTimer() {
  clearInterval(timerInterval); // если уже идёт — сбрасываем

  let time = 3 * 60; // 3 минуты в секундах
  const timerEl = document.getElementById("timer");

  function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (time > 0) {
      time--;
    } else {
      clearInterval(timerInterval);
    }
  }

  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

// событие нажатия по container-document
document.querySelector(".container-document").addEventListener("click", () => {
  startTimer();
});

  function formatDateTime() {
    const now = new Date();
    const options = { 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    const time = now.toLocaleTimeString('uk-UA', options);
    const date = now.toLocaleDateString('uk-UA');
    return `Документ оновлено о ${time} | ${date}  •`;
  }

  const marquee = document.getElementById("marquee");
  const text = formatDateTime();
  marquee.innerHTML = `
    <span>${text}</span>
    <span>${text}</span>
    <span>${text}</span>
    <span>${text}</span>
    <span>${text}</span>
    <span>${text}</span>
  `;




 function formatDateTime2() {
  const now2 = new Date();
  const options2 = { 
    hour: '2-digit', 
    minute: '2-digit' 
  };
  const time2 = now2.toLocaleTimeString('uk-UA', options2);
  const date2 = now2.toLocaleDateString('uk-UA');
  return `Документ оновлено о ${time2} | ${date2} •`;
}

const marquee2 = document.getElementById("marquee2");
const text2 = formatDateTime2();

// Используем marquee2, а не marquee
marquee2.innerHTML = `
  <span>${text2}</span>
  <span>${text2}</span>
  <span>${text2}</span>
  <span>${text2}</span>
  <span>${text2}</span>
  <span>${text2}</span>
`;


  let startX = 0;
  const threshold = 50; // минимальное расстояние свайпа в px

  document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  document.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;

    // свайп влево -> ко 2 экрану (document-3)
    if (diffX < -threshold && !document.body.classList.contains('screen-2')) {
      document.body.classList.add('screen-2');
    }

    // свайп вправо -> назад к основному паспорту
    if (diffX > threshold && document.body.classList.contains('screen-2')) {
      document.body.classList.remove('screen-2');
    }
  });



});

