// Открытие изображения на весь экран
function openFullscreen(container) {
    var img = container.querySelector("img");
    var fullscreenContainer = document.getElementById("fullscreenContainer");
    var fullscreenImage = document.getElementById("fullscreenImage");

    // Устанавливаем src изображения для полноэкранного режима
    fullscreenImage.src = img.src;

    // Показываем контейнер полноэкранного изображения
    fullscreenContainer.style.display = "flex";
}

// Закрытие полноэкранного изображения
function closeFullscreen() {
    var fullscreenContainer = document.getElementById("fullscreenContainer");
    fullscreenContainer.style.display = "none";
}

// Укажите дату в формате "ГГГГ-ММ-ДД"
const startDate = new Date("2023-05-05"); // Измените на нужную дату

// Функция для вычисления количества дней
function calculateDays() {
  const today = new Date(); // Текущая дата
  const timeDifference = today - startDate; // Разница в миллисекундах
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Перевод в дни

  // Выводим результат в HTML
  document.getElementById("days").innerText = daysPassed;
}

// Вызываем функцию
calculateDays();


document.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;

  elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight) {
          element.classList.add('visible');
      }
  });
});

