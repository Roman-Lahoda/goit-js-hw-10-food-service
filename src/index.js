import menu from './menu.json';
import createMenu from './menu-template.hbs';

const refs = {
  menuList: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
  switch: document.querySelector('#theme-switch-toggle'),
};

function createMarkup() {
  return createMenu(menu);
}

refs.menuList.innerHTML = createMarkup();

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('change', changeTheme);

if (localStorage.getItem('theme') === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
} else {
  refs.body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

function changeTheme() {
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
}
