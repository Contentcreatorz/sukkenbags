AOS.init();

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
  header.classList.toggle('sticky', window.scrollY > 0);
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
