(function($) {
    "use strict";

    //preloader
    $(window).on("load", function() { // makes sure the whole site is loaded
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.
        // script popup image
        $('.popup-img').magnificPopup({
            type: 'image'
        });
    });



    //replace the data-background into background image
    $(".blog-img-bg").each(function() {
        var imG = $(this).data('background');
        $(this).css('background-image', "url('" + imG + "') "

        );
    });
	
	$(".blog-header-slider").owlCarousel({
            navigation: true,
            navigationText: ['<span class="slide-nav inleft"><i class="fa fa-long-arrow-left"></i></span >', '<span class="slide-nav inright"><i class="fa fa-long-arrow-right"></i></span >'],
            slideSpeed: 300,
            stopOnHover: true,
            autoplay: true,
            autoHeight: true,
            pagination: true,
            paginationSpeed: 300,
            singleItem: false,
            transitionStyle: "fade",
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
        });
	
    //create menu for tablet/mobile
    $(".menu-box .navigation").clone(false).find("ul,li").removeAttr("id").remove(".sub-menu").appendTo($(".mobile-menu"));
    $(".mobile-menu .sub-menu").remove();
    $('.mobile-menu').on('show.bs.collapse', function() {
        $('body').on('click', function() {
            $('.mobile-menu').collapse('hide');
        })
    })

    //toggle menu
    $('.menu-btn').on('click', function() {
        $('.mobile-menu').collapse({
            toggle: false
        });
    })

    //blog team setting
    $(".blog-slider").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        autoplay: true,
        autoHeight: true,
        pagination: false,
        paginationSpeed: 300,
        singleItem: true,
        mouseDrag: true,
        navigationText: ['<span class="slide-nav inleft"><i class="fa fa-long-arrow-left"></i></span >', '<span class="slide-nav inright"><i class="fa fa-long-arrow-right"></i></span >'],
        stopOnHover: false,
        transitionStyle: "fade"
    });

    //script for navigation(superfish)
    $('.menu-box ul').superfish({
        delay: 400, //delay on mouseout
        animation: {
            opacity: 'show',
            height: 'show'
        }, // fade-in and slide-down animation
        animationOut: {
            opacity: 'hide',
            height: 'hide'
        },
        speed: 200, //  animation speed
        speedOut: 200,
        autoArrows: false // disable generation of arrow mark-up
    })

    //script for flickr in widget
    $('#flickr').jflickrfeed({
        limit: 9,
        qstrings: {
            id: '142951871@N02'
        },
        itemTemplate: '<li>' + '<a href="{{image_b}}" class="popup-img"><img src="{{image_q}}" alt="{{title}}" /></a>' + '</li>'
    });

    //isotope setting(blog masonry)
    var $container = $('.blog-mason');
    $container.imagesLoaded(function() {
        $container.isotope();
    });

    // Video responsive
    $("body").fitVids();




})(jQuery);