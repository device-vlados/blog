let mask = document.querySelector('.mask');

window.addEventListener('load', () =>  {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    },10000);
});
// =============================================================================================

// =============================================================================================
const sunriseTime = '05:00';
const sunsetTime = '20:00';

function updateTheme() {
    const currentTime = new Date();

    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    const currentTimeString = `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`;

    let currentTheme = 'bright';

    if (currentTimeString >= sunriseTime && currentTimeString <= sunsetTime) {
    currentTheme = 'bright';
    // document.getElementById('style').setAttribute('href', 'css/main.css');
    document.body.removeAttribute('dark');
    } else {
    currentTheme = 'dark';
    // document.getElementById('style').setAttribute('href', 'css/style.css');
    document.body.setAttribute('dark', '');
    }
}

updateTheme();
setInterval(updateTheme, 60000);
// =====================================================================================================
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
				document.querySelectorAll('.nav a, .header__nav--open a').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});
				document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
			}
		});
	}
});
// =====================================================================================================
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                animItem.classList.remove('active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

$(function () {
    
    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__nav').toggleClass('header__nav--open')
        $('.overlay').toggleClass('overlay--show')
    })
    // SLIDER1
    $('.slider__slide').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        waitForAnimate: true,
        infinite: true,
    })
    $('.slider__arrow-prev').on('click', function (e) {
        e.preventDefault()
        $('.slider__slide').slick('slickPrev')
    })
    $('.slider__arrow-next').on('click', function (e) {
        e.preventDefault()
        $('.slider__slide').slick('slickNext')
    })
    // 
    $(".header__nav a, .aside__btn").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 800)
    })
});
// ======================================================================
