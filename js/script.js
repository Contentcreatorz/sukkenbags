AOS.init();

let lastScrollTop = 0; // We'll use this to store the last scroll position

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) { // If we're scrolling down
    header.classList.remove('visible');
  } else { // If we're scrolling up
    header.classList.add('visible');
  }
  
  lastScrollTop = scrollTop;
  header.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener('resize', AOS.refresh);
