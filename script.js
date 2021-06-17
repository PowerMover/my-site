let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
   page.classList.toggle ('dark-theme');
}
let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function () {
  if (heart.classList.contains('added')) {
    counter--;
  } else {
    counter++;
  }
  likesNumber.textContent = counter;
  heart.classList.toggle('added');
};
