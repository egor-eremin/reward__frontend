$(document).ready(function() {

    (function addMainSlider() {
        initSlider($('#main-slider'),$('#main-slider .banner__item:first-child'),".banner__item");
    })();
    (function wrapButton() {
        wrapUpSliderArrow('.slick-arrow', 'template-wrapper wrapper-slider-button');
    })();
    (function validateSubscribe() {
        validationForm($('#subscribe-form'));
    })();
    (function closeMainSlider() {
        $('.banner__close').on('click', function () {
            $('.slider-wrapper').slideUp(300);
        })
    })();
    (function validateSearchForm() {
        validationForm($('#search-form'));
    })();
    (function openCategoryMenu() {
        $('#open-category-menu').on('click', function () {
            if ($(this).hasClass('open')) {
                $('.category-menu').removeClass('show');
                $(this).removeClass('open');
                // $('.close-category-menu').removeClass('active');
            } else {
                $(this).addClass('open');
                $('.category-menu').addClass('show');
                // $('.close-category-menu').addClass('active');
            }
        });
    })();
    // (function closeCategoryMenu() {
    //     $('.close-category-menu').on('click', function (e) {
    //        e.preventDefault();
    //        $(this).removeClass('active');
    //        $('.category-menu').removeClass('show');
    //        $('#open-category-menu').removeClass('open');
    //     });
    // })();
    (function initTooltip() {
        $('.tooltip').tooltipster({
            interactive: true,
        });
    })();
    (function fixedHeightOnCategoryCard() {
        $('.cards__wrapper').each(function (i, e) {
            var thisHeight = $(this).outerHeight();
            var thisParents = $(this).parents('.cards__item');

            $(this).mouseover(function () {
                thisParents.css('height',thisHeight);
            });

            $(this).mouseout(function () {
                console.log('asd');
                thisParents.css('height','auto');
            });

        })

    })();
    (function addViewportAnimation() {
        $('.souvenir').viewportChecker({
            classToAdd: 'animation-cup',
        });
    })();
    (function initNewsSlider() {
        $('#init-news-slider').on('init', function(event, slick){
            var countSlide = $('.news-slider .slick-dots li:last-child button').text();
            var activeSlide = $('.news-slider .slick-dots .slick-active button').text();
            $('.news-slide-number__count').text(countSlide);
            $('.news-slide-number__this-slide').text(activeSlide);
        });
        $('#init-news-slider').on('afterChange', function(event, slick, currentSlide){
            var countSlide = $('.news-slider .slick-dots li:last-child button').text();
            var activeSlide = $('.news-slider .slick-dots .slick-active button').text();
            $('.news-slide-number__count').text(countSlide);
            $('.news-slide-number__this-slide').text(activeSlide);
        });
        $('#init-news-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev news-slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="12" viewBox="0 0 34 12">\n' +
            '  <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>\n' +
            '<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        ">\n' +
            '   <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n' +
            '      <rdf:Description rdf:about=""/>\n' +
            '   </rdf:RDF>\n' +
            '</x:xmpmeta>\n' +
            '<?xpacket end="w"?></metadata>\n' +
            '  <path fill="#404040" id="Фигура_24_копия" data-name="Фигура 24 копия" class="cls-1" d="M1399,4463.13h-30.7l5.61-5.13h-2.44l-6.47,6,6.47,6h2.44l-5.61-5.13H1399v-1.74Z" transform="translate(-1365 -4458)"/>\n' +
            '</svg>\n</button>',
            nextArrow: '<button type="button" class="slick-next news-slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="12" viewBox="0 0 34 12">\n' +
            '  <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>\n' +
            '<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        ">\n' +
            '   <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n' +
            '      <rdf:Description rdf:about=""/>\n' +
            '   </rdf:RDF>\n' +
            '</x:xmpmeta>\n' +
            '<?xpacket end="w"?></metadata>\n' +
            '  <path fill="#404040" id="Фигура_24" data-name="Фигура 24" class="cls-1" d="M1521,4464.87h30.7l-5.61,5.13h2.44l6.47-6-6.47-6h-2.44l5.61,5.13H1521v1.74Z" transform="translate(-1521 -4458)"/>\n' +
            '</svg></button>',
        });
        $('.news-slider .slick-arrow').wrapAll('<div class="news-button-wrapper"></div>');
        $('.news-slide-number').appendTo('.news-button-wrapper');
    })();
    (function addModalCalbackForm() {
        $('.callback').magnificPopup({
            type: 'inline',
            items: {
                src: '.callback-popup',
            },
            showCloseBtn: false,
        });
        $(document).on('click', '.close-button', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        })
    })();
    (function addEnterModal() {
        $('.enter').magnificPopup({
            type: 'inline',
            items: {
                src: '.enter-popup',
            },
            showCloseBtn: false,
        });
    })();
    (function editErrorMessage() {
        jQuery.extend(jQuery.validator.messages, {
            required: "Это поле обязательно для заполнения",
            minlength: "Введите корректный телефон",
            email: "Введите корректный email",
        });
    })();
    (function addPhoneMask() {
        $('.phone-input').mask('+7 (000)-000-00-00');
    })();
    (function addValidationCallbackForm() {
        $('#callback-form').validate({
            required: true,
        });
    })();
    (function toggleTypeInput() {
        $('.eye-icon').mousedown(function () {
            myFunction();
        });
        $('.eye-icon').mouseup(function () {
            myFunction();
        });
    })();
    (function validateEnterForm() {
        $('#enter-form').validate({
            required: true,
        });
    })();

    (function initRangeSlider() {
        var slider = document.getElementById('custom-range');
        var minMeaning = document.getElementById('input-min');
        var maxMeaning = document.getElementById('input-max');

        noUiSlider.create(slider, {
            start: [0, 100000],
            connect: true,
            step: 1,
            range: {
                'min': 0,
                'max': 100000
            },
            format: wNumb({
                decimals: 0,
                thousand: ' ',
            })
        });

        slider.noUiSlider.on('update', function( values, handle ) {

            var value = values[handle];

            if ( handle ) {
                maxMeaning.value = value;
            } else {
                minMeaning.value = value;
            }
        });

        minMeaning.addEventListener('change', function(){
            slider.noUiSlider.set([this.value, null]);
        });

        maxMeaning.addEventListener('change', function(){
            slider.noUiSlider.set([null, this.value]);
        });

    })();
    (function addMaskForIntervalRange() {
        $('.input-interval').mask('# ##0', {reverse: true});
    })();
    (function initCustomSelect() {
        CustomSelect('#filter-select', 'Все', '.filter-select-wrapper');
    })();
    (function addCustomSortSelect() {
        CustomSelect('#custom-sort-select', 'Сортировать', '.sort-select-wrapper');
    })();


    function CustomSelect(main_selector,select_placeholder,dr_parent) {
        $(main_selector).select2({
            placeholder: select_placeholder,
            allowClear: true,
            dropdownParent:$(dr_parent),
        });
    }
    function myFunction() {
        var thisInput = document.getElementById("password");
        if (thisInput.type === "password") {
            thisInput.type = "text";
        } else {
            thisInput.type = "password";
        }
    }
    function wrapUpSliderArrow(arrow, wrapper) {
       $(arrow).wrapAll('<div class="' + wrapper + '"></div>');
    };
    function validationForm(selector) {
        selector.validate();
        jQuery.extend(jQuery.validator.messages, {
            required: "Это поле обязательно для заполнения",
            minlength: "Введите корректный телефон",
            email: "Введите корректный email",
        });
    };
    function initSlider(initSelector, firstChild, sliderItem) {
        initSelector.on('init', function(e, slick) {
            var $firstAnimatingElements = firstChild.find('[data-animation]');
            doAnimationsInit($firstAnimatingElements);
            $('#initialization-slider .slick-arrow').wrapAll('<div class="template-wrapper wrapper-slick-arrow"></div>');
        });
        initSelector.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $(sliderItem + '[data-slick-index="' + currentSlide + '"]').find('[data-after-animation]');
            doAnimationsAfter($animatingElements);
        });

        initSelector.on('afterChange', function (e, slick, currentSlide) {
            var $animatingElements = $(sliderItem + '[data-slick-index="' + currentSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        initSelector.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            infinite: true,
            prevArrow: "<button type=\"button\" class=\"slick-prev\"></button>",
            nextArrow: "<button type=\"button\" class=\"slick-next\"></button>",
        });
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
        function doAnimationsAfter(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('after-animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
        function doAnimationsInit(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': '1s',
                    '-webkit-animation-delay': '1s'
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    };

});