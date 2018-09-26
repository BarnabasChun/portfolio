const headerNav = $('.header__nav');
const navHeight = headerNav.height();

$(window).scroll(() => {
  if (window.scrollY > navHeight) {
    headerNav.addClass('scroll-down');
  } else {
    headerNav.removeClass('scroll-down');
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