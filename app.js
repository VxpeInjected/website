const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

document.querySelectorAll("[data-loading]").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    btn.classList.add("loading");

    setTimeout(() => {
      window.location.href = "/pages/dashboard.html";
    }, 500);
  });
});

function notify(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => toast.classList.remove("show"), 2500);
}
