gsap.registerPlugin(ScrollTrigger);

// ---toggle menu----

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.style.right = (menu.style.right === '0%' || menu.style.right === '') ? '-100%' : '0%';

  gsap.from('.menu-socials', {
    x: '-100%',
    duration: 1
  })
}

// landing animations
function animateElements() {

  // Animation for the header
  gsap.fromTo('.header', { y: '-100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' });

  baffle('.header nav a')
    .reveal(1000)
    .set({
        characters: '▒░░░░█░░▒█▓▓░█/░░>▒/▒/▓▒░',
        speed: 150
    });

    gsap.fromTo('.card', { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' });
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(animateElements);
});

$(".card").hover(function () {
  $(".card").removeClass("active");
  $(this).addClass("active");
});
