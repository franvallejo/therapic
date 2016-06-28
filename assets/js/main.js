/*	Javascript code for all elements
 /*----------------------------------------------------*/
$(document).ready(function () {

  var width = $(window).width();
  var height = $(window).height();

  setHeight(height);
  /* La hoja lleva galeria se vuelve a hacer otra llamada a resize() */
  resize(width, height);
  /* initialize(); */


  var cargar = true;
  var cerrar = false;
  var primera = true;

  $('.choose-menu').click(function () {

    if (primera == true) {
      $('#menu').toggleClass('col-xs-12');
      $('#menu').toggleClass('col-xs-2');
      $('#content').toggleClass('col-xs-0');
      $('#content').toggleClass('col-xs-10');
      $('#content').addClass('appear');

      $('.menu-1').parent().removeClass('col-xs-6');
      $('.menu-2').parent().removeClass('col-xs-6');

      $('.menu-1').removeClass('height-50').addClass('height-20');
      $('.menu-2').removeClass('height-33').addClass('height-20');
      primera = false;
    }
    if (cargar == true) {

      cerrar = true;

      setHeight(height);

      switch ($(this).children().attr('id')) {
        case 'section-1':
          $('.choose-menu').removeClass('active');
          $(this).addClass('active');
          $('#main-content').addClass('disappear').removeClass('appear');
          $.ajax({
            url: "servicio-1.html",
            success: function (result) {
              $('#main-content').addClass('appear').removeClass('disappear');
              $("#main-content").html(result);
            }
          });
          break;
        case 'section-2':
          $('.choose-menu').removeClass('active');
          $(this).addClass('active');
          $('#main-content').addClass('disappear').removeClass('appear');
          $.ajax({
            url: "servicio-2.html",
            success: function (result) {
              $('#main-content').addClass('appear').removeClass('disappear');
              $("#main-content").html(result);
            }
          });
          break;
        case 'section-3':
          $('.choose-menu').removeClass('active');
          $(this).addClass('active');
          $('#main-content').addClass('disappear').removeClass('appear');
          $.ajax({
            url: "servicio-3.html",
            success: function (result) {
              $('#main-content').addClass('appear').removeClass('disappear');
              $("#main-content").html(result);
            }
          });
          break;
        case 'section-4':
          $('.choose-menu').removeClass('active');
          $(this).addClass('active');
          $('#main-content').addClass('disappear').removeClass('appear');
          $.ajax({
            url: "servicio-4.html",
            success: function (result) {
              $('#main-content').addClass('appear').removeClass('disappear');
              $("#main-content").html(result);
            }
          });
          break;
        case 'section-5':
          $('.choose-menu').removeClass('active');
          $(this).addClass('active');
          $('#main-content').addClass('disappear').removeClass('appear');
          $.ajax({
            url: "servicio-5.html",
            success: function (result) {
              $('#main-content').addClass('appear').removeClass('disappear');
              $("#main-content").html(result);
            }
          });
          break;
      }
      /*Carga de AJAX */
    }
    else {

      /*Carga de AJAX */
    }
  });

  $('.close-content').click(function () {
    cargar = true;
    primera = true;
    $('#menu').toggleClass('col-xs-12');
    $('#menu').toggleClass('col-xs-2');

    $('#content').toggleClass('col-xs-0');
    $('#content').toggleClass('col-xs-10');

    $('.menu-1').parent().addClass('col-xs-6');
    $('.menu-2').parent().addClass('col-xs-6');

    $('.menu-1').removeClass('height-20').addClass('height-50');
    $('.menu-2').removeClass('height-20').addClass('height-33');

    setHeight(height);

    $('#main-content').html('');
  });

  $("#scroll-main").click(function () {
    $('main').removeClass('fixed');
    $('html, body').animate({
      scrollTop: $("#main-page").offset().top
    }, 500, function () {
      $('html, body').css({
        'overflow': 'hidden'
      });
    });

  });


});


$(window).ready(function () {
  $("body").fadeTo(0, 0).fadeTo(1000, 1);
  $('.linea').addClass('progreso');
  $(".linea").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function (e) {
    $('.flecha').addClass('appear');
    // do something here
    $(this).off(e);
  });
});


$(window).on('resize', function () {

  var width = $(window).width();
  var height = $(window).height();

  /* La hoja lleva galeria se vuelve a hacer otra llamada a resize() */
  resize(width, height);
  setHeight(height);
});


/*  SetHeight
 /*---------------------------------------------------- */
function setHeight(height_px) {

  for (var i = 0, limit = 100; i <= limit; i++) {
    if (i == 33) {
      $(".height-" + i).css({'height': height_px / 3});
    }
    else {
      $(".height-" + i).css({'height': (height_px / 100) * i});
    }
  }
}


/*  Resize
 /*---------------------------------------------------- */
function resize(width, height) {

  $('.height-temporal').css({'height': '300px'});


  /* Definir height imagen gallery */
  var img_gallery_width = $('#gallery').children().width();

  $('.h-4-3').css({'height': img_gallery_width * 0.75});
  $('.h-16-9').css({'height': img_gallery_width * 0.56});

  /* Detectar inicio de scroll a partir de una clase */
  var scroll_start = 0;
  var startchange = $('.detect-scroll');
  var offset = startchange.offset();

  if (startchange.length) {
    /* Acciones si hay scroll */

    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();

      if (scroll_start > offset.top) {


      } else {


      }
    });
  }
  /* cierre deteccion scroll */


  if (width > 768) {
    /*Bigger than mobile */


  } else {
    /*Mobile*/


  }

}
/* --------------- CLOSE resize() --------------- */



/*
 * Bootstrap Image Gallery JS Demo 3.0.1
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true */
/*global blueimp, $ */

$(function () {
  'use strict';

  /*   objeto  =  nuevo galeria (xx);
   var images = json decode (<?= json encode  onbjeto-->getimages > ;);  */


  // Load demo images from flickr:
  $.ajax({
    // Flickr API is SSL only:
    // https://code.flickr.net/2014/04/30/flickr-api-going-ssl-only-on-june-27th-2014/
    url: 'https://api.flickr.com/services/rest/',
    data: {
      format: 'json',
      method: 'flickr.interestingness.getList',
      api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback'
  }).done(function (result) {
    var linksContainer = $('#gallery'),
        baseUrl;

    // Add the demo images as links with thumbnails to the page:
    $.each(result.photos.photo, function (index, photo) {
      baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret;
      $('<div/>')
          .append($('<a/>')
              .append($('<img>')
                  .prop('src', baseUrl + '_m.jpg')
                /* cambiar h-4-3 por h-16-9 si queremos que la proporcioón sea 16/9 */
                  .prop('class', 'w-100 img-gallery h-4-3')
          )
              .prop('href', baseUrl + '_b.jpg')
              .prop('title', photo.title)
              .attr('data-gallery', '')
      )
        /* cambiar col-xs-3 y no-padding por las clases correspondiente para representar la galeria a su gusto */
          .prop('class', 'col-xs-3 no-padding')
          .appendTo(linksContainer);
    });
    resize();
  });

  $('#borderless-checkbox').on('change', function () {
    var borderless = $(this).is(':checked');
    $('#blueimp-gallery').data('useBootstrapModal', !borderless);
    $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
  });

  $('#fullscreen-checkbox').on('change', function () {
    $('#blueimp-gallery').data('fullScreen', $(this).is(':checked'));
  });

  $('#image-gallery-button').on('click', function (event) {
    event.preventDefault();
    blueimp.Gallery($('#gallery a'), $('#blueimp-gallery').data());
  });

  $('#video-gallery-button').on('click', function (event) {
    event.preventDefault();
    blueimp.Gallery([
      {
        title: 'Sintel',
        href: 'https://archive.org/download/Sintel/sintel-2048-surround_512kb.mp4',
        type: 'video/mp4',
        poster: 'https://i.imgur.com/MUSw4Zu.jpg'
      },
      {
        title: 'Big Buck Bunny',
        href: 'https://upload.wikimedia.org/wikipedia/commons/7/75/' +
        'Big_Buck_Bunny_Trailer_400p.ogg',
        type: 'video/ogg',
        poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/' +
        'Big.Buck.Bunny.-.Opening.Screen.png/' +
        '800px-Big.Buck.Bunny.-.Opening.Screen.png'
      },
      {
        title: 'Elephants Dream',
        href: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/' +
        'Elephants_Dream_%28high_quality%29.ogv/' +
        'Elephants_Dream_%28high_quality%29.ogv.360p.webm',
        type: 'video/webm',
        poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
        'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
      },
      {
        title: 'LES TWINS - An Industry Ahead',
        type: 'text/html',
        youtube: 'zi4CIXpx7Bg'
      },
      {
        title: 'KN1GHT - Last Moon',
        type: 'text/html',
        vimeo: '73686146',
        poster: 'https://secure-a.vimeocdn.com/ts/448/835/448835699_960.jpg'
      }
    ], $('#blueimp-gallery').data());
  });

});


/*
 /*------------- Initialize() ------------- */
function initialize() {
  var myLatlng = new google.maps.LatLng(39.5895, 2.6760591);
  var myOptions = {
    zoom: 16,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false

  }
  var map = new google.maps.Map(document.getElementById("mapa"), myOptions);
  var styles =
      [{"featureType": "all", "elementType": "all", "stylers": [{"hue": "#008eff"}]},
        {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]},
        {
          "featureType": "road", "elementType": "all", "stylers": [{"saturation": "0"},
          {"lightness": "0"}]
        },
        {"featureType": "road.highway", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]},
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "labels",
          "stylers": [{"visibility": "off"}]
        },
        {"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{"color": "#b3d6e4"}]},
        {
          "featureType": "road.arterial", "elementType": "labels", "stylers": [{"visibility": "simplified"},
          {"saturation": "-24"},
          {"lightness": "36"}]
        },
        {
          "featureType": "road.arterial", "elementType": "labels.text", "stylers": [{"lightness": "-34"},
          {"visibility": "simplified"}]
        },
        {
          "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{"lightness": "-30"},
          {"visibility": "simplified"}]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.stroke",
          "stylers": [{"visibility": "simplified"}]
        },
        {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]},
        {"featureType": "road.local", "elementType": "labels.icon", "stylers": [{"lightness": "2"}]},
        {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]},
        {
          "featureType": "water", "elementType": "all", "stylers": [{"visibility": "simplified"},
          {"saturation": "-60"},
          {"lightness": "-33"},
          {"color": "#26789b"}]
        }]
  map.setOptions({styles: styles});

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Map"
  });
  marker.setIcon('/assets/images/Map-Marker.png');
}
/* --------------- CLOSE initialize() --------------- */




/* Soft scroll */
$(function () {
  $('a[href^="#"]').bind('click', function (event) {
    var $anchor = $(this);
    var href = $anchor.attr('href');
    try {
      var elem = $(href);
      if (elem.length) {
        $('html, body').stop().animate({
              scrollTop: elem.offset().top
            },
            1000);

        event.preventDefault();
      }
    }
    catch (err) {
    }
  });
});


