// document.onreadystatechange = function() {
//     if (document.readyState === "interactive" ) {

//     }
// }
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
    $(".filter__switch-text").on("click", function () {
        $(this).parent().toggleClass("filter__switch--active")
        $(this).next().slideToggle(400)
    })
    $(".filter__switch-modal-label").on("click", function (e) {
        $(this)
            .parents(".filter__switch")
            .children(".filter__switch-text")
            .text($(e.target).text())
        $(this).parents(".filter__switch-modal").toggle(0)
        $(this)
            .parents(".filter__switch")
            .toggleClass("filter__switch--active")
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
    })
    $('.content__more').on('click', () => {
        $('.card--hidden').removeClass('card--hidden')
    })
    // $('.share').on('click',)
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
    // /Page load
});
