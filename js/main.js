/*==================== SHOW LOADER ====================*/
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

/*==================== SHOW DATE AND TIME ====================*/
function displayDate() {
  var now = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var date = now.toLocaleDateString("en-GB", options);
  // en-US, en-GB, id-ID, en-AU, en-CA, en-NZ, en-ZA, en-IN, en-PH, en-SG, en-ZW, en-MY, en-HK, en-TW, en-IE, en-BE, en-LU, en-NL, en-DE, en-AT, en-CH, en-IT, en-ES, en-PT, en-FR, en-GR, en-SE, en-NO, en-DK, en-FI, en-IS, en-TR, en-IL, en-JP, en-KR, en-CN, en-TH, en-VN, en-MX
  document.getElementById("date").innerHTML = date;
}

setInterval(displayDate, 1000);

function displayTime() {
  var now = new Date();
  var options = { hour: "numeric", minute: "numeric", second: "numeric" };
  var time = now.toLocaleString("en-GB", options);
  document.getElementById("time").innerHTML = time;
}

setInterval(displayTime, 1000);




/*==================== QUOTE OF THE DAY ====================*/

const setupEl = document.querySelector(".setup");
const punchlineEl = document.querySelector(".punchline");
const newQuoteBtn = document.querySelector(".new-quote-btn");

function generateRandomJokes() {
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      setupEl.textContent = data.setup;
      punchlineEl.textContent = `- ${data.punchline} -`;
    })
    .catch((error) => console.log(error));
}

newQuoteBtn.addEventListener("click", generateRandomJokes);

generateRandomJokes();


