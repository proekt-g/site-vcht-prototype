document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        $(window).width() <= 700 && $('.block-head__ui').appendTo('.main__content-timer')
        $(window).width() <= 700 && $('.information__inner').prepend($('.information__logo'))
    }
}
window.addEventListener("load", function () {
    // variables
    // /variables
    // ----------------------------------------------
    // universal function
    function ajaxRequest(ajaxForm, url) {
        try {
            history.replaceState(null, null, "#")
        } catch (z) {
            console.log(z)
        }
        $.ajax({
            url: url,
            type: "POST",
            dataType: "html",
            data: $("#" + ajaxForm).serialize(), // Сеарилизуем объект
            success: function (response) {
                //Данные отправлены успешно
                let result = $.parseJSON(response)
                console.log(result)
            },
            error: function (response) {
                // Данные не отправлены
                alert("Ошибка. Данные не отправлены.")
            },
        })
    }
    function closeModal() {
        scrollEmulation()
        $(".modal-overlay").removeClass("modal-overlay--active")
        $(".modal").removeClass("modal--active")
    }
    function scrollEmulation() {
        let documentWidth = parseInt(document.documentElement.clientWidth)
        let windowsWidth = parseInt(window.innerWidth)
        let scrollbarWidth = windowsWidth - documentWidth
        $("body").css({ "padding-right": `${scrollbarWidth}px` })
        $("body").toggleClass("block")
    }
    //  /universal function
    // ----------------------------------------------
    // event
    // Фильтр на странице program-events.html
    $("#program-events-form").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("program-events-form", "test.php")
    })
    // /Фильтр на странице program-events.html
    // Фильтр на странице speakers.html (поиск)
    $("#speakers-search").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("speakers-search", "test.php")
    })
    // /Фильтр на странице speakers.html (поиск)
    // Фильтр на странице speakers.html (сортировка спикеров)
    $("#speakers-sort").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("speakers-sort", "test.php")
    })
    // /Фильтр на странице speakers.html (сортировка спикеров)
    // Фильтр на странице profile.html 
    $("#edit-form").on("submit", (e) => {
        e.preventDefault()
        ajaxRequest("edit-form", "test.php")
    })
    // /Фильтр на странице profile.html 
    // Фильтр на странице exhibition.html 
    $("#exhibition-form").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("exhibition-form", "test.php")
    })
    // /Фильтр на странице exhibition.html 
    // Фильтр на странице exponent.html 
    $("#exponent-program").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("exponent-program", "test.php")
    })
    // /Фильтр на странице exponent.html 
    // Форма регистрации 
    $("#form-sign-up").on("submit", (e) => {
        e.preventDefault()
        ajaxRequest("form-sign-up", "test.php")
    })
    // /Форма регистрации 
    // Форма входа 
    $("#form-sign-in").on("submit", (e) => {
        e.preventDefault()
        ajaxRequest("form-sign-in", "test.php")
    })
    // /Форма входа 
    // Форма возобновления пароля form-sign-new-password
    $("#form-sign-reset").on("submit", (e) => {
        e.preventDefault()
        ajaxRequest("form-sign-reset", "test.php")
    })
    // /Форма возобновления пароля 
    // Форма нового пароля 
    $("#form-sign-new-password").on("submit", (e) => {
        e.preventDefault()
        ajaxRequest("form-sign-new-password", "test.php")
    })
    // /Форма нового пароля 
    // Форма отправки сообщения в модальном окне 
    $("#message-speaker").on("submit", (e) => {
        e.preventDefault()
        ajaxRequest("message-speaker", "test.php")
        // Закрытие текущего модального окна с формай
        closeModal()
        // /Закрытие текущего модального окна с формай
        // Вызов второго попапа
        scrollEmulation(),
            $('.modal-overlay').toggleClass('modal-overlay--active'),
            $('.modal--thanks').toggleClass('modal--active')
        // /Вызов второго попапа
    })
    // /Форма отправки сообщения в модальном окне
    $("button.menu__desktop-element").on("click", function () {
        $(this).toggleClass('menu__desktop-element--open')
        $('.header-modal__nav').fadeToggle(400)
    })
    $(".language").on("click", function () {
        $(this).toggleClass('language--open')
        $('.header-modal__language').fadeToggle(400)
    })
    $(".header__acount").on("click", function () {
        $(this).toggleClass('header__acount--open')
        $('.header-modal__acount').fadeToggle(400)
    })
    $(window).width() <= 1279 && $('.menu').on('click', function () {
        scrollEmulation()
        $(this).toggleClass('menu--open')
        $(this).hasClass('menu--open') && (
            $('.language').removeClass('language--open'),
            $('.header-modal__language').fadeOut(100)
        )
    })
    $(".filter-switch__text").on("click", function () {
        $(this).parent().toggleClass("filter-switch--active")
        $(this).next().slideToggle(400)
    })
    $(".filter-switch__modal-label").on("click", function (e) {
        $(this)
            .parents(".filter-switch")
            .children(".filter-switch__text")
            .text($(e.target).text())
        $(this).parents(".filter-switch__modal").toggle(0)
        $(this)
            .parents(".filter-switch")
            .toggleClass("filter-switch--active")
    })
    $(".crumbs__crumb").on("click", function (e) {
        $(e.target).parents('.filter-top').length && ($(this).toggleClass('crumbs__crumb--active'), filterContentBlock())
        $(e.target)
            .parents(".crumbs__crumb")
            .toggleClass("crumbs__crumb--active")
        $(e.target).parents(".crumbs").children(".crumbs__crumb--active")
            .length === 0
            ? $(e.target)
                .parents(".crumbs")
                .children(".crumbs__clear")
                .removeClass("crumbs__clear--active")
            : $(e.target)
                .parents(".crumbs")
                .children(".crumbs__clear")
                .addClass("crumbs__clear--active")
    })
    $(".crumbs__clear").on("click", function () {
        $(this)
            .parents(".crumbs")
            .children(".crumbs__crumb")
            .removeClass("crumbs__crumb--active")
        $(this).removeClass("crumbs__clear--active")
        filterContentBlock()
    })
    $('.filter-link').on('click', function () {
        $('.filter-link--active').removeClass('filter-link--active')
        $(this).addClass('filter-link--active')
    })
    $('body').on('click', (e) => {
        const share = (($(e.target).hasClass('share') && $(e.target)) || ($(e.target).parents('.share').length && $($(e.target).parents('.share')[0])) || null);
        share && share.find('.information-share').toggleClass('information-share--active')
        $(e.target).hasClass('avatars__more') && $(e.target) && $(e.target).toggleClass('avatars__more--active')
        const moreElement = (($(e.target).hasClass('avatars__more-element') && $(e.target)) || ($(e.target).parents('.avatars__more-element').length && $($(e.target).parents('.avatars__more-element')[0])) || null);
        moreElement && (
            moreElement.toggleClass('avatars__more-element--active'),
            moreElement.find('.avatars__more-text').slideToggle(400)
        )
        const enterMessage = (($(e.target).hasClass('avatars__avatar-modal-link') && $(e.target)) || ($(e.target).parents('.avatars__avatar-modal-link').length && $($(e.target).parents('.avatars__avatar-modal-link')[0])) || null);
        enterMessage && (
            scrollEmulation(),
            $('.modal-overlay').toggleClass('modal-overlay--active'),
            $('.modal--message').toggleClass('modal--active')
        )
    })
    $('.content__more').on('click', (e) => {
        e.preventDefault()
        $('.card--hidden').removeClass('card--hidden')
    })
    $('.main__content-more').on('click', () => {
        $('.main__content-more').toggleClass('main__content-more--open')
        if (!$('.main__content-text--active').length) {
            $('.main__content-text').toggleClass('main__content-text--active')
            const el = $('.main__content-text'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({ height: autoHeight }, 200);
            $('.main__content-more-text').text($('.main__content-more-text').data('switch-text-start'))

        } else {
            $('.main__content-text').toggleClass('main__content-text--active')
            $('.main__content-text').css('height', $('.main__content-text').data('text-height'))
            $('.main__content-more-text').text($('.main__content-more-text').data('switch-text-end'))
        }
    })
    $('.participants__toggle-button').on('click', function () {
        $('.participants__toggle-button').removeClass('participants__toggle-button--active')
        $(this).addClass('participants__toggle-button--active')
    })
    $(".modal__close").on("click", closeModal)
    $(".modal__content-close").on("click", (e) => {
        e.preventDefault();
        closeModal()
    })
    $(".modal-overlay").on("click", (e) => {
        if ($(e.target).hasClass("modal-overlay--active")) closeModal()
    })
    $('.button--message').on('click', (e) => {
        scrollEmulation()
        $('.modal-overlay').toggleClass('modal-overlay--active')
        $('.modal--message').toggleClass('modal--active')
    })
    $('.form__input-eye').on('click', function () {
        $(this).parents('.form__input-wrapper').toggleClass('form__input-wrapper--look')
        !$(this).parents('.form__input-wrapper').hasClass('form__input-wrapper--look')
            ? $(this).parents('.form__input-wrapper').find('.form__input').attr('type', 'password')
            : $(this).parents('.form__input-wrapper').find('.form__input').attr('type', 'text')
    })
    $('.box-landing__button').on('click', () => {
        scrollEmulation()
        $('.modal-overlay').toggleClass('modal-overlay--active')
        $('.modal__concept').toggleClass('modal--active')
    })
    $('.information__more').on('click', function () {
        $(this).toggleClass('information__more--active')
        $('.information__contacts-block').slideToggle(400)
    })
    $('.cards__button').on('click', function () {
        $(this).parent().find('.cards__button--active').removeClass('cards__button--active')
        $(this).addClass('cards__button--active')
    })
    $('.broadcast .content__more').on('click', function () {
        $(this).toggleClass('content__more--active');
        $('.content__chat').slideToggle(400)
    })
    // /event
    // ----------------------------------------------
    // unique function
    function filterContentBlock() {
        const arrElements = [];
        $('.content').fadeOut(100)
        $('.crumbs__crumb--active').each((index, element) => {
            $('.content').each((i, e) => {
                $(e).data('name') === $(element).data('tag-name') && arrElements.push(e)
            })
        })
        console.log(arrElements)
        $(arrElements).length ? $(arrElements).fadeIn(100) : $('.content').fadeIn(100)
    }
    // /unique function
    // ----------------------------------------------
    // Page load
    $(window).width() <= 1279 && $('.header-modal__nav-element').appendTo('.menu__desktop')
    $(window).width() <= 700 && $('.menu__desktop').prepend($('.header-modal__acount'))
    // Механика добавления крошкой даты на планшетах
    $(window).width() <= 700 && $('.header__button').appendTo('.menu__desktop')
    if ($(window).width() <= 900) {
        $('.card').each((index, item) => {
            $(item).find('.card__head-crumbs').prepend(`<div class="card__head-info">${$(item).find('.card__footer .card__day').text()}</div>`)
        })
    }
    // /Механика добавления крошкой даты на планшетах
    document.querySelector('.main__recommendation-block') && $(window).width() > 1100 && OverlayScrollbars(document.querySelectorAll(".main__recommendation-block"), {
        paddingAbsolute: true
    });
    // ТАЙМЕР
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('#timer-days');
        var hoursSpan = clock.querySelector('#timer-hours');
        var minutesSpan = clock.querySelector('#timer-minutes');
        var secondsSpan = clock.querySelector('#timer-seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clock.classList.add('main__content-start--finish')
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
    if (document.getElementById('timer')) {
        const deadline = `
            ${$('#timer').data('timer-month')} 
            ${$('#timer').data('timer-day')} 
            ${$('#timer').data('timer-year')} 
            ${$('#timer').data('timer-hours')}:
            ${$('#timer').data('timer-minutes')}:
            ${$('#timer').data('timer-seconds')} GMT+0300`;
        initializeClock('timer', deadline);
    }
    // /ТАЙМЕР
    $(window).width() <= 700 && document.querySelector('.event__swiper') && new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        // autoHeight: true
    })

    $(window).width() <= 1100 && $('.main__recommendation-block').appendTo('.recommendation')
    $(window).width() <= 900 && $('.interesting .section-head__link').appendTo('.interesting .container')
    $(window).width() <= 900 && $('.webinars .section-head__link').appendTo('.webinars .container')

    new Swiper('.exhibition__organizator', {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
            nextEl: '.exhibition__organizator-wrapper .swiper-button-next',
            prevEl: '.exhibition__organizator-wrapper .swiper-button-prev',
        },
        pagination: {
            el: '.exhibition__organizator-wrapper .swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
            501: { slidesPerView: 'auto', }
        }
    })
    new Swiper('.exhibition__partners', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
            nextEl: '.exhibition__partners-wrapper .swiper-button-next',
            prevEl: '.exhibition__partners-wrapper .swiper-button-prev',
        },
        pagination: {
            el: '.exhibition__partners-wrapper .swiper-pagination',
            type: 'bullets',
        },
    })
    new Swiper(".poster-slider__slider", {
        spaceBetween: 20,
        slidesPerView: 1,
        grabCursor: true,
        navigation: {
            nextEl: "#first-slider-arrow-right",
            prevEl: "#first-slider-arrow-left",
        },
        breakpoints: {
            501: {
                slidesPerView: "auto",
            }
        },
        on: {
            slideChange: ({ slides, activeIndex }) => {
                slides.each((slide, index) => {
                    index < activeIndex
                        ? $(slide).addClass("swiper-slide-prev-prev")
                        : $(slide).removeClass("swiper-slide-prev-prev")
                })
                slides.each((slide, index) => {
                    index > activeIndex
                        ? $(slide).addClass("swiper-slide-next-next")
                        : $(slide).removeClass("swiper-slide-next-next")
                })
            },
            reachEnd: ({ $el }) => {
                $el.children(".poster-slider__shadow").addClass(
                    "poster-slider__shadow--hidden"
                )
                $el.children(".poster-slider__dark").addClass(
                    "poster-slider__dark--hidden"
                )
                $($el).parents('.poster-slider').find('.swiper-slide-next-next').removeClass('swiper-slide-next-next')
                $($el).parents('.poster-slider').find('.poster-slider__arrow').fadeOut(100)
            },
            fromEdge: ({ $el }) => {
                $el.children(".poster-slider__shadow").removeClass(
                    "poster-slider__shadow--hidden"
                )
                $el.children(".poster-slider__dark").removeClass(
                    "poster-slider__dark--hidden"
                )
                $(window).width() > 900 && $($el).parents('.poster-slider').find('.poster-slider__arrow').fadeIn(100)
            },
            init: ({ slides, activeIndex }) => {
                slides.each((slide, index) => {
                    index > activeIndex
                        ? $(slide).addClass("swiper-slide-next-next")
                        : $(slide).removeClass("swiper-slide-next-next")
                })
            }
        },
    })
    let offset = +3;
    let date = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace(/ GMT/, "")
    let currentHour = date.replace(/^.+, \d{2} .+ /, '').replace(/:\d{2}:\d{2}$/, '')
    let currentMinutes = date.replace(/^.+, \d{2} .+ /, '').replace(/^\d{2}:/, '').replace(/:\d{2}$/, '')
    $('.head__time-online-hour').text(currentHour)
    $('.head__time-online-minute').text(currentMinutes)
    $('.head__time-online-second').text(date.replace(/^.+, \d{2} .+ /, '').replace(/^\d{2}:\d{2}:/, ''))

    $(".head__time-online").length && setInterval(() => {
        offset = +3;
        date = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace(/ GMT/, "")
        $('.head__time-online-hour').text(currentHour)
        $('.head__time-online-minute').text(currentMinutes)
        $('.head__time-online-second').text(date.replace(/^.+, \d{2} .+ /, '').replace(/^\d{2}:\d{2}:/, ''))

    }, 1000);


    $('.slider').each((index, item) => {
        $(item).find('.slider__line--active').css('left', ((parseInt(currentHour * 60) + parseInt(currentMinutes)) - 420) * 2.63 + 'px')
        $(item).find('.slider__number--active').css('left', (((parseInt(currentHour * 60) + parseInt(currentMinutes)) - 420) * 2.63) - 42 + 'px')

        let indexInitialSlide, allWidthSlide = 0, marginLeftSlide = 0, startPosition = 0, activeSlideWidth = 0;
        $(item).find('.slider__slide').each((index, item) => {



            const startHour = parseInt($(item).data('start-hour')),
                startMinutes = parseInt($(item).data('start-minutes')),
                endHour = parseInt($(item).data('hour-end')),
                endMinutes = parseInt($(item).data('minutes-end'));

            index === 0
                // ? $(item).css('margin-left', ((((startHour * 60) + startMinutes) - 420) * 2.63) + 'px')
                // : $(item).css('margin-left', (((((startHour * 60) + startMinutes) - 420) * 2.63) - allWidthSlide) + 'px')
                ? $(item).css('left', ((((startHour * 60) + startMinutes) - 420) * 2.63) + 'px')
                : $(item).css('left', (((((startHour * 60) + startMinutes) - 420) * 2.63)) + 'px')

            const widthSlide = (((endHour * 60) + endMinutes) - ((startHour * 60) + startMinutes)) * 2.63;
            allWidthSlide += (widthSlide + parseInt(item.style.marginLeft));

            $(item).css('flex', `0 0 ${widthSlide}px`)
            $(item).css('width', `${widthSlide}px`)

            $(item).css('flex', `0 0 ${$(item).data('hour') * 157}px`)
            $(item).css('width', `${$(item).data('hour') * 157}px`)
            if ($(item).data('active')) {
                startPosition = parseInt($(item).css('left'))
                activeSlideWidth = parseInt($(item).css('width'))
            }
        })


        setTimeout(() => {
            let maxHeightSlider = 0;
            $(item).find('.slider__slide').each((index, item) => {
                // console.log($(item).outerHeight(), maxHeightSlide)
                if (maxHeightSlider < $(item).outerHeight()) maxHeightSlider = $(item).outerHeight()

            })
            $(item).find('.swiper-slide').height(maxHeightSlider + 'px')

            const widthBlockSlider = parseInt($(item).width())
            // console.log(widthBlockSlider)
            // maxHeightSlide = $(item).outerHeight()
            // console.log($(item), maxHeightSlide)
            new Swiper(`${'.' + $(item).attr('class').replace(/ /g, '.')} .swiper-container`, {
                slidesPerView: 'auto',
                // spaceBetween: 20,
                grabCursor: true,
                // centeredSlides: true,
                // centerSlidesBounds: true,
                // initialSlide: indexInitialSlide,
                navigation: {
                    nextEl: '.' + $(item).attr('class').replace(/ /g, '.') + ' .' + $(item).find('.slider__arrow--right').attr('class').replace(/ /g, '.'),
                    prevEl: '.' + $(item).attr('class').replace(/ /g, '.') + ' .' + $(item).find('.slider__arrow--left').attr('class').replace(/ /g, '.'),
                },
                // on: {
                //     slideChange: () => {
                //         console.log('hello')
                //         $(item).find('.swiper-wrapper')[0].style.transform = 'translate3d(' + ($(item).find('.swiper-wrapper')[0].style.transform.replace(/translate3d\(/, ``).replace(/px, 0px, 0px\)/, '') - parseInt($(item).find('.swiper-slide-active')[0].style.marginLeft) / 3) + 'px, 0px, 0px)'
                //     }
                // }
                // breakpoints: {
                //     501: { slidesPerView: 'auto', }
                // }
            })
            // console.log($(item).find('.swiper-wrapper')[0].style.transform.replace(/translate3d\(/, ``).replace(/px, 0px, 0px\)/, '') - parseInt($(item).find('.swiper-slide-active')[0].style.marginLeft) / 3)
            console.log((startPosition - (widthBlockSlider / 2) + (activeSlideWidth / 2) + 50))
            setTimeout(() => {
                $(window).width() > 500
                    ? $(item).find('.swiper-wrapper')[0].style.transform = 'translate3d(-' + (startPosition - (widthBlockSlider / 2) + (activeSlideWidth / 2) + 50) + 'px, 0px, 0px)'
                    : $(item).find('.swiper-wrapper')[0].style.transform = 'translate3d(-' + (startPosition + 31) + 'px, 0px, 0px)'
            }, 500)
        }, 500)
    })
    // /Page load
});
