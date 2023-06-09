AOS.init();

let lastScrollTop = 0;
let header = document.getElementById('header');

function handleHeaderScroll() {
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
}

window.addEventListener('scroll', handleHeaderScroll);

window.addEventListener('resize', AOS.refresh);

document.addEventListener("DOMContentLoaded", function () {
  let isSidebarOpen = false;

  document.getElementById("mobile-menu-button").addEventListener("click", function () {
    var mobileNav = document.getElementById("mobile-nav");
    var mySidebar = document.getElementById("mySidebar");
    var header = document.getElementById("header");
    Array.from(document.getElementsByClassName("nav-links")).forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.style.transform = 'translateX(100%)';
          mySidebar.classList.remove("show-sidebar");
          header.style.transform = 'translateY(0%)';
          isSidebarOpen = false;
      });
    });


    if (!isSidebarOpen) {
      mobileNav.style.transform = 'translateX(0%)';
      header.style.transform = 'translateY(-100%)';
      mySidebar.classList.add("show-sidebar");
      window.removeEventListener('scroll', handleHeaderScroll);
      isSidebarOpen = true;
    }
  });

  document.getElementById("close-mobile-nav").addEventListener("click", function () {
    var mobileNav = document.getElementById("mobile-nav");
    var mySidebar = document.getElementById("mySidebar");
    var header = document.getElementById("header");

    if (isSidebarOpen) {
      mobileNav.style.transform = 'translateX(100%)';
        header.style.transform = 'translateY(0)';
        mySidebar.classList.remove("show-sidebar");
        window.addEventListener('scroll', handleHeaderScroll);
        isSidebarOpen = false;
    }
  });
});