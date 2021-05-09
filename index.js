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
  if (speed <= 1) {
    const estimatedTime = time * (1 + (1 - speed));
    const filmTime = document.createElement("h1");
    const resultTime = document.createElement("h1");
    filmTime.innerText = `Your film will last around : ${estimatedTime} minutes`;
    resultTime.innerText = `You will have to watch around more : ${
      estimatedTime - Math.floor(time)
    } minutes`;
    result.appendChild(filmTime);
    result.appendChild(resultTime);
  } else if (speed > 1) {
    // To put the spped of a film at a certain value which is greater than 1, come back to decrease the time
    const estimatedTime = time * (2 - speed);
    const filmTime = document.createElement("h1");
    const resultTime = document.createElement("h1");
    filmTime.innerText = `Your film will last around : ${estimatedTime} minutes`;
    resultTime.innerText = `You will save around : ${
      Math.floor(time) - estimatedTime
    } minutes`;
    result.appendChild(filmTime);
    result.appendChild(resultTime);
  }
});
