$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 56
            }, 1000);
        }

        var navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.forEach(function (nav) {
                    nav.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    });
});

