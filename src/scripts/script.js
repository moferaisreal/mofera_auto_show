AOS.init();

/* FUNÇÃO CONTADOR REGRESSIVO */
const countDownDate = new Date("Dec 19, 2035 12:00:00");
const timeStampEvent = countDownDate.getTime();
const counterElement = setInterval(function () {
  const now = new Date();
  const timeStampNow = now.getTime();

  const distance = timeStampEvent - timeStampNow;

  const dayInMs = 1000 * 60 * 60 * 24;
  const hourInMs = 1000 * 60 * 60;
  const minuteInMs = 1000 * 60;
  const secondInMs = 1000;

  const daysToEvent = Math.floor(distance / dayInMs);
  const hoursToEvent = Math.floor((distance % dayInMs) / hourInMs);
  const minutesToEvent = Math.floor((distance % hourInMs) / minuteInMs);
  const secondsToEvent = Math.floor((distance % minuteInMs) / secondInMs);

  console.log(
    daysToEvent +
      "d " +
      hoursToEvent +
      "h " +
      minutesToEvent +
      "m " +
      secondsToEvent +
      "s "
  );
  document.getElementById("counter").innerHTML =
    daysToEvent +
    "D " +
    hoursToEvent +
    "H " +
    minutesToEvent +
    "M " +
    secondsToEvent +
    "S ";

  if (distance < 0) {
    clearInterval(counterElement);
    document.getElementById("heroText").innerHTML =
      "O Mofera Auto Show o maior evento de carros do Planeta já expirou, até a próxima edição!";
  }
}, 1000);

/* FIM DA FUNÇÃO CONTADOR REGRESSIVO */

/* COMPORTAMENTO DO DROPDOWN DE IDIOMAS NO FOOTER */

const toggle = document.getElementById("lang-toggle");
const dropdown = document.getElementById("lang-dropdown");

toggle.addEventListener("click", () => {
  dropdown.classList.toggle("footer__dropdown--active");
});

document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("footer__dropdown--active");
  }
});
/* FIM DO COMPORTAMENTO DO DROPDOWN DE IDIOMAS NO FOOTER */
