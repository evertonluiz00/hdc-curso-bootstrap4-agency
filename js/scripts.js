$(document).ready(function()  {

    // Progress Bar
    let containerA = document.getElementById("circle-A");
    let containerB = document.getElementById("circle-B");
    let containerC = document.getElementById("circle-C");
    let containerD = document.getElementById("circle-D");

    let circleA = new ProgressBar.Circle(containerA, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 60);
            circle.setText(value);
        }
    });

    let circleB = new ProgressBar.Circle(containerB, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 254);
            circle.setText(value);
        }
    });

    let circleC = new ProgressBar.Circle(containerC, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 32);
            circle.setText(value);
        }
    });

    let circleD = new ProgressBar.Circle(containerD, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2500,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            let value = Math.round(circle.value() * 5240);
            circle.setText(value);
        }
    });


    // Iniciando o loader quando o usuário chega no elemento
    let dataAreaOffSet = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {
        let scrollPosition = $(window).scrollTop();

        if (scrollPosition > (dataAreaOffSet.top - 600) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });


    // Parallax
    setTimeout(function() {
        $('#data-area').parallax({ imageSrc: 'img/cidadeparallax.png' });
        //$('#apply-area').parallax({ imageSrc: 'img/pattern.png' });
        $('#company-img').parallax({ imageSrc: 'img/empresa.jpg' });
        $('#pattern-img').parallax({ imageSrc: 'img/pattern.png' });
    }, 250);


    // Filtro do portfólio
    $('.filter-btn').on('click', function() {
        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if (type == 'dsg-btn') {
            eachBox('dsg', boxes);
        } else if (type == 'dev-btn') {
            eachBox('dev', boxes);
        } else if (type == 'seo-btn') {
            eachBox('seo', boxes);
        } else {
            eachBox('all', boxes);
        }
    });

    function eachBox(type, boxes) { 
        if (type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }


    // Scroll to sections
    let navBtn = $('.nav-item');

    let bannerSection = $('#main-slider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function() {
        let btnId = $(this).attr('id');

        if (btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if (btnId == 'services-menu') {
            scrollTo = servicesSection;
        } else if (btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if (btnId == 'portfolio-menu') {
            scrollTo = portfolioSection;
        } else if (btnId == 'contact-menu') {
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);

    });
});