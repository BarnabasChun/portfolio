const headerNav = $('.header__nav');
const navHeight = headerNav.height();

$(window).scroll(() => {
  if (window.scrollY > navHeight) {
    headerNav.css('background-color', 'rgba(0, 0, 0, .85)');
  } else {
    headerNav.css('background-color', 'transparent');
  }
});

$('a').smoothScroll({
  speed: 1000
});


const manageNav = () => {
  let isNavOpen = false;

  const toggleNav = () => {
    isNavOpen = !isNavOpen;
    $('.mobile-nav').toggleClass('nav-open');
  };

  [
    $('.menu-btn'),
    $('.mobile-nav__link'),
    $('.close-btn')
  ].forEach(el => el.click(toggleNav));
}

manageNav();