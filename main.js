const headerNav = $('.header__nav');
const navHeight = headerNav.height();

$(window).scroll(() => {
  if (window.scrollY > navHeight) {
    headerNav.css('background-color', 'rgba(0, 0, 0, .5)');
  } else {
    headerNav.css('background-color', 'transparent');
  }
});
