$(document).ready(function () {


  try {
    $('#play-video1').on('click', function (ev) {
      var domElement = document.getElementById('iframe-video');
      if (domElement.classList.contains('iframe-in-visible')) {
        domElement.classList.remove('iframe-in-visible')
      }
      domElement.setAttribute('src', document.getElementById('play-video1').name);
      // $("#video")[0].src = src + "&autoplay=1";
      ev.preventDefault();
    });
  } catch (error) {

  }

  try {
    $('#play-video2').on('click', function (ev) {
      var domElement = document.getElementById('iframe-video');
      if (domElement.classList.contains('iframe-in-visible')) {
        domElement.classList.remove('iframe-in-visible')
      }
      domElement.setAttribute('src', document.getElementById('play-video2').name);
      // $("#video")[0].src = src + "&autoplay=1";
      ev.preventDefault();
    });
  } catch (error) {

  }

  try {
    $('#play-video3').on('click', function (ev) {
      var domElement = document.getElementById('iframe-video');
      if (domElement.classList.contains('iframe-in-visible')) {
        domElement.classList.remove('iframe-in-visible')
      }
      domElement.setAttribute('src', document.getElementById('play-video3').name);
      // $("#video")[0].src = src + "&autoplay=1";
      ev.preventDefault();
    });
  } catch (error) {

  }

  try {
    $('#play-video4').on('click', function (ev) {
      var domElement = document.getElementById('iframe-video');
      if (domElement.classList.contains('iframe-in-visible')) {
        domElement.classList.remove('iframe-in-visible')
      }
      domElement.setAttribute('src', document.getElementById('play-video4').name);
      // $("#video")[0].src = src + "&autoplay=1";
      ev.preventDefault();
    });
  } catch (error) {

  }

  try {
    $('#play-video5').on('click', function (ev) {
      var domElement = document.getElementById('iframe-video');
      if (domElement.classList.contains('iframe-in-visible')) {
        domElement.classList.remove('iframe-in-visible')
      }
      domElement.setAttribute('src', document.getElementById('play-video5').name);
      // $("#video")[0].src = src + "&autoplay=1";
      ev.preventDefault();
    });
  } catch (error) {

  }

  try {
    $('#play-video4').on('click', function (ev) {
      var domElement = document.getElementById('iframe-video');
      if (domElement.classList.contains('iframe-in-visible')) {
        domElement.classList.remove('iframe-in-visible')
      }
      domElement.setAttribute('src', document.getElementById('play-video6').name);
      // $("#video")[0].src = src + "&autoplay=1";
      ev.preventDefault();
    });
  } catch (error) {

  }
});



$('body').keypress(function (e) {
  try {
    alert(e.which);
    if (e.which == 27) {
      var domElement = document.getElementById('iframe-video');
      if (!domElement.classList.contains('iframe-in-visible')) {
        domElement.classList.add('iframe-in-visible')
      }
    }
  } catch (error) {
  }
});

