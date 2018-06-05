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