const form = document.getElementById("form-estimation");
const speedController = document.getElementById("speed-controller");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  result.innerHTML = "";
  e.preventDefault();
  const hours = document.getElementById("hours").value;
  const minutes = document.getElementById("minutes").value;
  const seconds = document.getElementById("seconds").value;
  // Put hours & seconds onto minutes
  const time =
    parseInt(hours) * 60 + parseInt(minutes) + parseInt(seconds) / 100;

  const speed = speedController.options[speedController.selectedIndex].value;
  // We can considerer intial time as a distance and so apply the following method : "Speed = D/t" <=> "T = D/Speed"
  const estimatedTime = time / speed;
  const filmTime = document.createElement("h1");
  const resultTime = document.createElement("h1");
  filmTime.innerText = `Your film will last around : ${estimatedTime} minutes`;
  resultTime.innerText = `You will have to watch around more : ${
    time - filmTime
  }`;

  if (speed < 1) {
    resultTime.innerText = `You will have to watch around more : ${
      filmTime - time
    }`;
  } else if (speed == 1) {
    resultTime.innerText = "";
  }

  estimatedTime - Math.floor(time);
  result.appendChild(filmTime);
  result.appendChild(resultTime);
});
