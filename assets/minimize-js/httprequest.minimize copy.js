$(function () {
 var e =
   'ontouchstart' in document.documentElement &&
   navigator.userAgent.match(/Mobi/),
  t = !0;
 try {
  (s = document.getElementById('body')).setAttribute(
   'oncontextmenu',
   'return false'
  ),
   s.setAttribute('onselectstart', 'return false'),
   s.setAttribute('ondragstart', 'return false'),
   s.setAttribute('oncopy', 'return false'),
   s.setAttribute('oncut', 'return false'),
   s.setAttribute('onpaste', 'return false');
 } catch (e) {}
 try {
  document.addEventListener(
   'contextmenu',
   function (e) {
    e.preventDefault();
   },
   !1
  );
 } catch (e) {}
 try {
  var o = window.location.href;
  (o.endsWith('projects.html') ||
   o.endsWith('farmland-management-service.html') ||
   o.endsWith('leasing.html')) &&
   setTimeout(function () {
    var e = localStorage.getItem('captureCustomerInfo');
    (null === e &&
     ((e = localStorage.setItem('captureCustomerInfo', !1)),
     (e = sessionStorage.getItem('captureCustomerInfo'))),
    null !== e) &&
     'false' === e &&
     document.getElementById('id-customer-info').classList.remove('in-visible');
   }, 3e3);
 } catch (e) {}
 try {
  document.getElementById('init-pop-up').classList.add('in-visible');
 } catch (e) {}
 var i = localStorage.getItem('storedDate');
 null === i && (i = sessionStorage.getItem('storedDate'));
 var n = new Date();
 if (null === i)
  localStorage.setItem('storedDate', new Date().toLocaleDateString()),
   sessionStorage.setItem('storedDate', new Date().toLocaleDateString()),
   localStorage.setItem('captureCustomerInfo', !1),
   sessionStorage.setItem('captureCustomerInfo', !1),
   a();
 else if (
  ((i = new Date(i).toLocaleDateString()),
  (n = new Date(n).toLocaleDateString()),
  new Date(n) > new Date(i))
 )
  localStorage.setItem('storedDate', new Date().toLocaleDateString()),
   sessionStorage.setItem('storedDate', new Date().toLocaleDateString()),
   localStorage.setItem('captureCustomerInfo', !1),
   this.sessionStorage.setItem('captureCustomerInfo', !1),
   a();
 else {
  localStorage.setItem('storedDate', new Date().toLocaleDateString()),
   sessionStorage.setItem('storedDate', new Date().toLocaleDateString());
  try {
   document.getElementById('pop-up-blk').classList.remove('in-visible');
  } catch (e) {}
  try {
   var s;
   (s = document.getElementById('body')).style.overflow = 'auto';
  } catch (e) {}
  !(function () {
   var t = document.getElementById('id-customer-info');
   if (null !== t && !t.classList.contains('in-visible')) {
    var o = document.getElementById('init-pop-up');
    o.classList.add('in-visible'),
     'Mobi' === e[0]
      ? (document.getElementById('smartagro_logo').classList.add('in-visible'),
        document.getElementById('list-mbl').classList.add('in-visible'))
      : document.getElementById('list-desk').classList.add('in-visible');
   }
   try {
    var i = document.getElementById('body');
    i.style.overflow = 'auto';
   } catch (e) {}
  })();
 }
 try {
  !(function () {
   if ('Mobi' === e[0]) {
    try {
     document
      .getElementById('contact-numbers')
      .classList.remove('align-to-right');
    } catch (e) {}
    try {
     $('.social-icon-li').toggleClass('mbl-social-icon-li');
    } catch (e) {}
    try {
     $('.social-icons').toggleClass('mbl-social-icons');
    } catch (e) {}
    try {
     $('#socialicons').addClass('mbl-horizontal');
    } catch (e) {}
    try {
     $('.phone').toggleClass('mbl-phone');
    } catch (e) {}
    try {
     $('.mobile').attr('href', 'tel:+919606224400');
    } catch (e) {}
    try {
     $('#servicesmobile').attr('href', 'tel:+9110223393');
    } catch (e) {}
    try {
     var t = document.getElementById('pop-up-blk');
     t.classList.add('mbl-pop-up-blk'), t.classList.remove('pop-up-blk');
    } catch (e) {
     console.log(e);
    }
    var o = document.getElementById('video-tag-player');
    o.classList.add('in-visible');
    var i = document.getElementById('social-icons');
    i.classList.add('invisible');
   } else {
    try {
     document.getElementById('contact-numbers').classList.add('align-to-right');
    } catch (e) {}
    var o = document.getElementById('video-tag-player');
    o.classList.remove('in-visible');
    var i = document.getElementById('social-icons');
    i.classList.remove('invisible');
    try {
     var n = document.getElementById('stop-button');
     n.addEventListener(
      'click',
      function (e) {
       e.preventDefault();
       var t = document.getElementById('video');
       try {
        var o = t.getAttribute('src');
        t.setAttribute('src', o + ';&mute=1');
       } catch (e) {}
       document.getElementById('video-tag-player').classList.add('in-visible');
      },
      !1
     );
    } catch (e) {}
   }
  })();
 } catch (e) {}
 try {
 } catch (e) {}
 try {
  $(document).keydown(function (e) {
   if (123 == e.keyCode) return !1;
   if (e.ctrlKey && e.shiftKey && 73 == e.keyCode) return !1;
   if (e.ctrlKey && 86 == e.keyCode)
    return alert('Can not copy data from this site'), !1;
   if (e.ctrlKey && 67 == e.keyCode) return !1;
   if (27 == e.keyCode) {
    var t = document.getElementById('iframe-video');
    if (!t.classList.contains('iframe-in-visible'))
     t.classList.add('iframe-in-visible'),
      t.removeAttribute('src'),
      (document.getElementById('body').style.overflow = 'auto');
    return !1;
   }
  });
 } catch (e) {}
 try {
  Window.addEventListener(
   'devtools-opened',
   function (e) {
    e.preventDefault(), window.webContents.closeDevTools();
   },
   !1
  );
 } catch (e) {}
 function a() {
  if (
   document.getElementById('id-customer-info').classList.contains('in-visible')
  ) {
   var t = document.getElementById('init-pop-up');
   document.getElementById('pop-content').classList.add('popup-animate'),
    t.classList.remove('in-visible'),
    'Mobi' === e[0]
     ? (document
        .getElementById('smartagro_logo')
        .classList.remove('in-visible'),
       document.getElementById('list-desk').classList.add('in-visible'),
       document.getElementById('list-mbl').classList.remove('in-visible'))
     : (document.getElementById('list-desk').classList.remove('in-visible'),
       document.getElementById('list-mbl').classList.add('in-visible')),
    (document.getElementById('body').style.overflow = 'hidden');
  }
 }
 function l(e, o, i, n) {
  var s = i,
   a = 4e3,
   l = 3500;
  $('#preloader').removeClass('loaded'),
   $('#preloader').removeClass('loader-hidden'),
   'enquiryform' === o && ((a = 1e3), (l = 1e3));
  var r = new XMLHttpRequest();
  r.open('POST', e, !0),
   r.setRequestHeader('Content-Type', 'application/json'),
   r.setRequestHeader('Accept', 'application/json'),
   (r.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && 200 === this.status) {
     if (0 === JSON.parse(r.responseText).status) {
      if ('false' === sessionStorage.getItem('isProjectBrowcherDownloaded'))
       try {
        window.open('./assets/brochure/Project_Brochure.pdf', '_blank');
       } catch (e) {
        try {
         document.getElementById(
          'captureCustomerInfo'
         ).href = window.location.toString();
        } catch (e) {}
       }
      if (
       'false' ===
       sessionStorage.getItem('isServiceBrowcherDownloaded', '_blank')
      )
       try {
        window.open('./assets/brochure/Investor_Brochure.pdf');
       } catch (e) {
        try {
         document.getElementById(
          'captureCustomerInfo'
         ).href = window.location.toString();
        } catch (e) {}
       }
      setTimeout(function () {
       $('#preloader').addClass('loaded'),
        $('#preloader').addClass('loader-hidden');
       var e = window.location.href,
        o = e.lastIndexOf('/');
       if (
        ((e = e.substring(o, e.length)),
        localStorage.setItem('oldUrl', e),
        sessionStorage.setItem('oldUrl', e),
        t)
       )
        (window.location.href = './thank-you.html'),
         setTimeout(function () {
          window.location.href = '.' + e;
         }, a);
       else
        try {
         document
          .getElementById('cust-info-section')
          .classList.add('in-visible');
        } catch (e) {}
      }, l);
     } else
      setTimeout(function () {
       $('#preloader').addClass('loaded'),
        $('#preloader').addClass('loader-hidden');
       var e = window.location.href,
        o = e.lastIndexOf('/');
       (e = e.substring(o, e.length)),
        localStorage.setItem('oldUrl', e),
        sessionStorage.setItem('oldUrl', e);
       try {
        document
         .querySelectorAll('.successfull')[0]
         .scrollIntoView({ behavior: 'smooth' });
       } catch (e) {}
       t &&
        ((window.location.href = './thank-you.html'),
        setTimeout(function () {
         window.location.href = '.' + e;
        }, 2e3));
       try {
        document
         .getElementById('cust-info-section')
         .classList.add('in-visible');
       } catch (e) {}
      }, 2e3);
    } else {
     try {
      document.getElementById('cust-info-section').classList.add('in-visible');
     } catch (e) {}
     setTimeout(function () {
      $('#preloader').addClass('loaded');
      var e = window.location.href,
       o = e.lastIndexOf('/');
      (e = e.substring(o, e.length)),
       localStorage.setItem('oldUrl', e),
       sessionStorage.setItem('oldUrl', e),
       t &&
        ((window.location.href = './thank-you.html'),
        setTimeout(function () {
         window.location.href = '.' + e;
        }, 1e3));
     }, 1e3);
    }
   });
  try {
   var c = (function (e, t, o) {
    var i = {
      name: '',
      mobile: '',
      email: '',
      message: '',
      emailFor: '',
      landlocation: '',
      numberOfAcres: '',
      subject: o,
     },
     n = $('#' + e);
    if (
     ($.each(n[0].elements, function (e, t) {
      if ($(t).is('[required]')) {
       if (void 0 === t.value || null === t.value || '' === t.value)
        throw (alert(t.title), $(t).focus(), new Error(t.title));
       if ('email' === t.type) {
        var o = t.value;
        if (!o.includes('.') || !o.includes('@') || o.endsWith('.'))
         throw (
          (alert('Enter Valid Email Id'), $(t).focus(), new Error(t.title))
         );
       }
       i[t.name] = t.value;
      } else i[t.name] = t.value;
     }),
     (i.emailFor = t),
     'enquiryform' === e)
    ) {
     try {
      (i.readytoinvest = document.getElementById('readytoinvest').value),
       (i.freesitevisit = document.getElementById('freesitevisit').value);
     } catch (e) {}
     try {
      var s = document.getElementById('professionalservices').value,
       a = '';
      'I have my own agricultural land / I own farmland' === s
       ? (a = 'Services')
       : 'I want to buy agricultural land / I want to invest' === s &&
         (a = 'Product');
     } catch (e) {}
     i.professionalservices = a;
    }
    if ('pr-contactForm' === e) {
     var l,
      r = void 0;
     try {
      l = document.getElementById('readytoinvest');
     } catch (e) {}
     try {
      r = document.getElementById('freesitevisit');
     } catch (e) {}
     if (void 0 === l.value || l.value.includes('Select'))
      throw (l.focus(), alert(l.title), new Error(l.title));
     if (
      ((i.readytoinvest = l.value),
      void 0 === r.value || r.value.includes('Select'))
     )
      throw (r.focus(), alert(r.title), new Error(r.title));
     i.freesitevisit = r.value;
    }
    try {
     i.splice(1, 1);
    } catch (e) {}
    return i;
   })(o, n, s);
   (requestpayload = JSON.stringify(c)), r.send(requestpayload);
  } catch (e) {
   console.log('err', this.status),
    $('#preloader').addClass('loaded'),
    $('#preloader').addClass('loader-hidden');
  }
 }
 $('#mobile').mouseleave(function () {
  $('.mobile').hasClass('deskmobile') &&
   ($(this).focus(),
   $(this).select(),
   document.execCommand('copy'),
   $('.visible').toggleClass('invisible'),
   $('.mobile').toggleClass('deskmobile'),
   (document.getElementById('mobile').value = ''),
   (document.getElementById('mobile').innerHTML =
    '<i id="fa-square" class="fa fa-phone-square visible" aria-hidden="true"></i>'));
 }),
  $('.mobile').mouseleave(function () {
   $('.mobile').hasClass('deskmobile') &&
    ($(this).focus(),
    $(this).select(),
    document.execCommand('copy'),
    $('.visible').toggleClass('invisible'),
    $('.mobile').toggleClass('deskmobile'),
    (document.getElementById('mobile').value = ''),
    (document.getElementById('mobile').innerHTML =
     '<i id="fa-square" class="fa fa-phone-square visible" aria-hidden="true"></i>'));
  }),
  $('.mobile').mouseenter(function () {
   'Mobi' !==
    ('ontouchstart' in document.documentElement &&
     navigator.userAgent.match(/Mobi/))[0] &&
    ($('.visible').toggleClass('invisible'),
    void 0 === document.getElementById('mobile').value ||
    '' === document.getElementById('mobile').value
     ? ((document.getElementById('mobile').value = '9606224400'),
       (document.getElementById('mobile').innerHTML = '9606224400'))
     : ((document.getElementById('mobile').value = ''),
       (document.getElementById('mobile').innerHTML =
        '<i id="fa-square" class="fa fa-phone-square visible" aria-hidden="true"></i>')),
    (document.getElementById('_phone').style.width = '200px'),
    $('.mobile').toggleClass('deskmobile'));
  }),
  $('#servicesmobile').mouseleave(function () {
   $('.servicesmobile').hasClass('deskmobile') &&
    ($(this).focus(),
    $(this).select(),
    document.execCommand('copy'),
    $('.visible').toggleClass('invisible'),
    $('.servicesmobile').toggleClass('deskmobile'),
    (document.getElementById('servicesmobile').value = ''),
    (document.getElementById('servicesmobile').innerHTML =
     '<i id="fa-square" class="fa fa-phone-square visible" aria-hidden="true"></i>'));
  }),
  $('#servicesmobile').mouseenter(function () {
   'ontouchstart' in document.documentElement &&
    navigator.userAgent.match(/Mobi/);
   $('.visible').toggleClass('invisible'),
    '' === document.getElementById('servicesmobile').value ||
    void 0 === document.getElementById('servicesmobile').value
     ? ((document.getElementById('servicesmobile').value = '9110223393'),
       (document.getElementById('servicesmobile').innerHTML = '9110223393'))
     : ((document.getElementById('servicesmobile').value = ''),
       (document.getElementById('servicesmobile').innerHTML =
        '<i id="fa-square" class="fa fa-phone-square visible" aria-hidden="true"></i>')),
    (document.getElementById('_phone').style.width = '200px'),
    $('.servicesmobile').toggleClass('deskmobile');
  }),
  $('.refer-a-friend').click(function () {
   (t = !0),
    l(
     'https://www.eternohousing.com/v1/services/gosmartagro/notification',
     'referform',
     'Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
     'PCU'
    );
  }),
  $('.refer-contact-friend').click(function () {
   (t = !0),
    l(
     'https://www.eternohousing.com/v1/services/gosmartagro/notification',
     'referformcontact',
     'Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
     'PCU'
    );
  }),
  $('.pr-we-connect-submit').click(function () {
   (t = !1),
    localStorage.setItem('captureCustomerInfo', !0),
    sessionStorage.setItem('captureCustomerInfo', !0),
    sessionStorage.setItem('isProjectBrowcherDownloaded', !1),
    l(
     'https://www.eternohousing.com/v1/services/gosmartagro/notification',
     'pr-contactForm',
     'Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
     'PCU'
    );
  }),
  $('.sr-we-connect-submit').click(function () {
   (t = !1),
    localStorage.setItem('captureCustomerInfo', !0),
    sessionStorage.setItem('captureCustomerInfo', !0),
    sessionStorage.setItem('isServiceBrowcherDownloaded', !1),
    l(
     'https://www.eternohousing.com/v1/services/gosmartagro/notification',
     'sr-contactForm',
     'Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
     'SCU'
    );
  }),
  $('.blog-enq-submit-submit').click(function () {
   (t = !1),
    l(
     'https://www.eternohousing.com/v1/services/gosmartagro/notification',
     'bl-enq-contactForm',
     'Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
     'PCU'
    );
  }),
  $('.lease-we-connect-submit').click(function () {
   (t = !1),
    l(
     'https://www.eternohousing.com/v1/services/gosmartagro/notification',
     'sr-contactForm',
     'Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
     'LEASE'
    );
  }),
  $('.we-connect').click(function () {
   (t = !1),
    l(
     'https://www.eternohousing.com/v1/services/gosmartagro/notification',
     'sr-contactForm',
     'Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
     'PCU'
    );
  }),
  $('.we-will-connect').click(function () {
   (t = !0),
    'undefined' != typeof Storage &&
     (localStorage.setItem('lastname', 'message-loaded'),
     sessionStorage.setItem('lastname', 'message-loaded')),
    l(
     'https://www.eternohousing.com/v1/services/gosmartagro/notification',
     'cotactusForm',
     'Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
     'PCU'
    );
  }),
  $('.drop-message').click(function () {
   (t = !0),
    l(
     'https://www.eternohousing.com/v1/services/gosmartagro/notification',
     'dropmessage',
     'Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
     'PCU'
    );
  }),
  $('.send-questions').click(function () {
   (t = !0),
    l(
     'https://www.eternohousing.com/v1/services/gosmartagro/notification',
     'sendquestions',
     'Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
     'PCU'
    );
  }),
  $('.invester-form').click(function () {
   (t = !0),
    l(
     'https://www.eternohousing.com/v1/services/gosmartagro/notification',
     'investerform',
     'Thank you for showing interest on Investing SmartAgro project, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
     'SCU'
    );
  }),
  $('.close-btn').click(function () {
   document.getElementById('init-pop-up').classList.add('in-visible'),
    document.getElementById('pop-up-blk').classList.remove('in-visible');
  }),
  $('.contact100-form-btn').click(function () {
   if (
    ((t = !0), 10 === document.getElementById('enq-moblnumber').value.length)
   ) {
    var e = document.getElementById('professionalservices').value;
    'I have my own agricultural land / I own farmland' === e
     ? l(
        'https://www.eternohousing.com/v1/services/gosmartagro/notification',
        'enquiryform',
        'Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
        'SCU'
       )
     : 'I want to buy agricultural land / I want to invest' === e
     ? '---Select---' !== document.getElementById('readytoinvest').value
       ? '---Select---' !== document.getElementById('freesitevisit').value
         ? l(
            'https://www.eternohousing.com/v1/services/gosmartagro/notification',
            'enquiryform',
            'Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393',
            'PCU'
           )
         : alert('Please Select When do you want to visit the site?')
       : alert('Please Select How much are you looking to invest?')
     : alert('Please Select Professional Service');
   } else alert('Mobile Number Should Be 10 digit');
  }),
  setTimeout(function () {
   var e = window.location.href,
    t = e.lastIndexOf('/');
   try {
    if (-1 != (e = e.substring(t, e.length)).indexOf('thank-you')) {
     var o = localStorage.getItem('oldUrl');
     window.location.href = null != o ? '.' + o : 'https://gosmartagro.com/';
    }
   } catch (e) {}
  }, 6e3);
});
