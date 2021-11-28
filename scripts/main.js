// Scroll to anchors
// const headerElHeight = document.querySelector(".header").clientHeight; и headerElHeight без меню
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();

//+++++++++++
console.log("привет это тест");
console.log(2 + 2);
console.log((22 + 22) / 2);
let time;
time = 35;
time = time - 7;
console.log("Старт поездки. Осталось минут: " + time);

//+=========
let phrases = ["отправить другу смешную гифку", "посмотреть скидки на авиабилеты", "разобраться, о чём поют рэперы", "Юрий Дудь", "расставить книги на полке по цвету", "читать про зарплаты в Сан-Франциско"];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

getRandomElement(phrases);
let randomElement = getRandomElement(phrases);

//+++++++
let variant = ["ты", "я", "кто то", "он", "она", "оно"];
function varianter(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}
varianter(variant);
let who = varianter(variant);
console.log(who + " дурачок");

//_________

//+++++++++++
function sayHello(name) {
  return "Привет, " + name;
}

let greeting = sayHello("Венера");
console.log(greeting);

//++++++++++
