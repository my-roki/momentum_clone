const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const clearKey = document.querySelector("#clear");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  getGreetingMessage(username);
  loginForm.classList.add("hidden");
  localStorage.setItem("username", username);
}

function onLogoutSumit() {
  localStorage.clear();
  window.location.reload();
}

function getGreetingMessage(username) {
  const nowHour = new Date().getHours();
  const greetingMessage = [
    [22, "Working late"],
    [18, "Good evening"],
    [12, "Good afternoon"],
    [5, "Good morning"],
    [0, "Whoa, early bird"],
  ];

  for (var i = 0; i < greetingMessage.length; i++) {
    if (nowHour >= greetingMessage[i][0]) {
      greeting.innerText = `${greetingMessage[i][1]}, ${username}.`;
      break;
    }
  }
  greeting.classList.remove("hidden");
}

const savedUserName = localStorage.getItem("username");
if (savedUserName) {
  getGreetingMessage(savedUserName);
} else {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
}

clearKey.addEventListener("click", onLogoutSumit);
