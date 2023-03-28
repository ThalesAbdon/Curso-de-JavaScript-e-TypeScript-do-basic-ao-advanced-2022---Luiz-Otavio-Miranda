function stopwatch() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const clock = document.querySelector(".clock");
  const start = document.querySelector(".start");
  const pause = document.querySelector(".pause");
  const reset = document.querySelector(".reset");
  let segundos = 0;
  let timer;

  function startClock() {
    timer = setInterval(function () {
      segundos++;
      clock.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("reset")) {
      console.log("Você clickou em reset");
      clearInterval(timer);
      clock.innerHTML = "00:00:00";
      segundos = 0;
    }

    if (el.classList.contains("pause")) {
      console.log("Você clickou em pause");
      clearInterval(timer);
      clock.classList.add("paused");

      // tentativa de fazer o clock piscar
      //   setInterval(function () {
      //     document.getElementById("clock").style.display = "none";
      //   }, 1000);
      //   setInterval(function () {
      //     document.getElementById("clock").style.display = "block";
      //   }, 2000);
    }

    if (el.classList.contains("start")) {
      console.log("Você clickou em start");
      clock.classList.remove("paused");
      clearInterval(timer);
      startClock();
    }
  });
}

stopwatch();
