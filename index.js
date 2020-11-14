document.querySelector(".share").addEventListener("click", hiddenClass);
document.querySelector(".shareHidden").addEventListener("click", hiddenClass);

function hiddenClass() {
  if (window.innerWidth > 700) {
    document.querySelector(".shareImage").classList.toggle("shareHiddenImage");
    document.querySelector(".sharePop").classList.toggle("elmntHidden");
    document.querySelector(".arrow").classList.toggle("elmntHidden");
  }
  if (window.innerWidth < 700) {
    document.querySelector(".contactName").classList.toggle("elmntHidden");
    document.querySelector(".avatar").classList.toggle("elmntHidden");
    document.querySelector(".share").classList.toggle("elmntHidden");
    document.querySelector(".sharePop").classList.toggle("elmntHidden");
  }
}
