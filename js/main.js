// Define the sunrise and sunset times in user's local time (24-hour format)
const sunriseTime = '06:00';
const sunsetTime = '20:00';

// Function to update the theme based on the current time
function updateTheme() {
  // Get the current time in user's local time
    const currentTime = new Date();

  // Extract the hours and minutes from the current time
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

  // Convert the current time to a string in HH:mm format
    const currentTimeString = `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`;

  // Determine the current theme based on the current time
    let currentTheme = 'bright'; // Assume bright theme by default

    if (currentTimeString >= sunriseTime && currentTimeString <= sunsetTime) {
    currentTheme = 'bright';
    document.getElementById('style').setAttribute('href', 'css/style.css'); // Set bright theme during daytime
    } else {
    currentTheme = 'dark';
    document.getElementById('style').setAttribute('href', 'css/style.css');// Set dark theme during nighttime
    }
}

// Call the updateTheme function initially
updateTheme();
setInterval(updateTheme, 60000);
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
 // Если сейчас ночь, то меняем файл стилей
