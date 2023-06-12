AOS.init()

let lastScrollTop = 0
let header = document.getElementById('header')

function handleHeaderScroll() {
	const header = document.getElementById('header')
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop

	if (scrollTop > lastScrollTop) {
		header.style.transform = 'translateY(-100%)'
	} else {
		header.style.transform = 'translateY(0)'
	}

	if (window.scrollY <= 5) {
		header.classList.add('transparent')
	} else {
		header.classList.remove('transparent')
		header.style.position = 'fixed'
	}

	lastScrollTop = scrollTop
}

window.addEventListener('scroll', handleHeaderScroll)

window.addEventListener('resize', AOS.refresh)

document.addEventListener('DOMContentLoaded', function () {
	let isSidebarOpen = false

	document.getElementById('mobile-menu-button').addEventListener('click', function () {
		var mobileNav = document.getElementById('mobile-nav')
		var mySidebar = document.getElementById('mySidebar')
		var header = document.getElementById('header')
		Array.from(document.getElementsByClassName('nav-links')).forEach(function (link) {
			link.addEventListener('click', function () {
				mobileNav.style.transform = 'translateX(100%)'
				mySidebar.classList.remove('show-sidebar')
				window.addEventListener('scroll', handleHeaderScroll)
				isSidebarOpen = false
			})
		})

		if (!isSidebarOpen) {
			mobileNav.style.transform = 'translateX(0%)'
			header.style.transform = 'translateY(-100%)'
			mySidebar.classList.add('show-sidebar')
			window.removeEventListener('scroll', handleHeaderScroll)
			isSidebarOpen = true
		}
	})

	document.getElementById('close-mobile-nav').addEventListener('click', function () {
		var mobileNav = document.getElementById('mobile-nav')
		var mySidebar = document.getElementById('mySidebar')
		var header = document.getElementById('header')

		if (isSidebarOpen) {
			mobileNav.style.transform = 'translateX(100%)'
			setTimeout(function () {
				header.style.transform = 'translateY(0)'
				mySidebar.classList.remove('show-sidebar')
				window.addEventListener('scroll', handleHeaderScroll)
				isSidebarOpen = false
			}, 500)
		}
	})
})

window.addEventListener('DOMContentLoaded', event => {
	fetch('../data/testimonials.json')
		.then(response => {
            if (!response.ok) { 
                throw new Error('Network response was not ok, cannot load testimonials'); 
            }
            return response.json();
        })
		.then(({testimonials}) => {
			const testimonialsContainer = document.querySelector('#testimonials .flex')
			testimonialsContainer.innerHTML = ''
			testimonials.forEach(testimonial => {
				testimonialsContainer.innerHTML += `
                    <div data-aos="zoom-in-up" class="w-full sm:w-1/2 p-4">
                        <blockquote class="border-l-4 border-purple-700 pl-4 italic mb-4">
                            <p>"${testimonial.quote}"</p>
                        </blockquote>
                        <cite class="font-bold text-dark-purple">- ${testimonial.author}</cite>
                    </div>
                `
			})
		})
        .catch((error) => {
            console.error('Error:', error);
        });
})
