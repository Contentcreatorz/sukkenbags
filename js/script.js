AOS.init();

let lastScrollTop = 0;
let header = document.getElementById('header');

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }

  if (window.scrollY <= 5) {
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
    header.style.position = 'fixed';
  }

  lastScrollTop = scrollTop;
});


window.addEventListener('resize', AOS.refresh);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mobile-menu-button").addEventListener("click", function () {
    var mobileNav = document.getElementById("mobile-nav");

    if (mobileNav.classList.contains("hidden")) {
      mobileNav.classList.remove("hidden");
    } else {
      mobileNav.classList.add("hidden");
    }
  });
});
