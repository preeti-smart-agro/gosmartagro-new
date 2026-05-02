!(function (t) {
  "use strict";
  (t(window).on("load", function () {
    try {
      t(".powered").toggleClass("invisible");
    } catch (e) {
      setTimeout(function () {
        t(".powered").toggleClass("invisible");
      }, 2e3);
    }
    if (
      (t("#preloader").addClass("loaded"),
      t(".cancel-preloader").on("click", function (e) {
        e.preventDefault(),
          t("#preloader").hasClass("loaded") ||
            t("#preloader").addClass("loaded");
      }),
      t(".xs-portfolio-grid").length > 0)
    ) {
      var e = t(".xs-portfolio-grid"),
        a = function () {
          var a, i, o;
          e.isotope({
            resizable: !0,
            itemSelector: ".xs-portfolio-grid-item",
            masonry: {
              columnWidth:
                ((i = e.width()),
                (o = 1),
                i > 1200
                  ? (o = 3)
                  : i > 900
                  ? (o = 3)
                  : i > 600
                  ? (o = 2)
                  : i > 450
                  ? (o = 2)
                  : i > 385 && (o = 1),
                (a = Math.floor(i / o)),
                e.find(".xs-portfolio-grid-item").each(function () {
                  var e = t(this),
                    i = e.attr("class").match(/xs-portfolio-grid-item-w(\d)/),
                    o = e.attr("class").match(/xs-portfolio-grid-item-h(\d)/),
                    n = i ? a * i[1] : a;
                  o && o[1], e.css({ width: n });
                }),
                a),
              gutterWidth: 3,
            },
          });
        };
      a(), t(window).resize(a);
    }
    t(".filter").on("click", function () {
      var e = t(this).attr("data-filter");
      t(".grid").isotope({ filter: e }),
        t(".filter").removeClass("active"),
        t(this).addClass("active");
    });
  }),
  t("#navigation1").length > 0 &&
    t("#navigation1").navigation({ effect: "slide" }),
  t(".banner-slider").length > 0) &&
    t(".banner-slider").owlCarousel({
      items: 1,
      loop: !0,
      mouseDrag: !0,
      touchDrag: !0,
      dots: !1,
      nav: !0,
      navText: [
        '<i class="icon icon-chevron-left"></i>',
        '<i class="icon icon-chevron-right"></i>',
      ],
      autoplay: !0,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !0,
      transitionStyle: "fade",
      smartSpeed: 800,
      responsive: { 0: { nav: !1 }, 480: { nav: !1 }, 991: { nav: !0 } },
    });
  t(".xs-video").magnificPopup({ type: "iframe" }),
    t("#mixcontent").mixItUp({
      animation: {
        effects: "fade translateX(50%)",
        reverseOut: !0,
        duration: 1e3,
      },
      load: { filter: "all" },
    });
  var e = !0;
  (t(".funfact-sec").appear(),
  t(".funfact-sec").on("appear", function () {
    e &&
      (t(".funfact-title").each(function () {
        var e = t(this);
        jQuery({ Counter: 0 }).animate(
          { Counter: e.attr("data-counter") },
          {
            duration: 8e3,
            easing: "swing",
            step: function () {
              var t = Math.ceil(this.Counter).toString();
              if (Number(t) > 99999)
                for (; /(\d+)(\d{3})/.test(t); )
                  t = t.replace(/(\d+)(\d{3})/, "");
              e.html(t);
            },
          }
        );
      }),
      (e = !1));
  }),
  t("#testmonial-slider").length > 0) &&
    t("#testmonial-slider").owlCarousel({
      items: 1,
      mouseDrag: !0,
      touchDrag: !0,
      dots: !0,
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !0,
      smartSpeed: 800,
    });
  t("#testmonial-slider-v2").length > 0 &&
    t("#testmonial-slider-v2").owlCarousel({
      items: 2,
      mouseDrag: !0,
      touchDrag: !0,
      dots: !1,
      nav: !0,
      margin: 30,
      navText: [
        '<i class="icon icon-arrow-left"></i>',
        '<i class="icon icon-arrow-right"></i>',
      ],
      autoplay: !0,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !0,
      smartSpeed: 800,
      responsive: {
        0: { nav: !0, items: 1 },
        480: { nav: !0, items: 1 },
        991: { nav: !0 },
      },
    });
  if (
    (t("body, html").on("click", ".BackTo", function (e) {
      e.preventDefault(), t("html, body").animate({ scrollTop: 0 }, 1e3);
    }),
    new WOW({ animateClass: "animated", mobile: !1 }).init(),
    t(".video-play-btn").magnificPopup({ type: "iframe" }),
    t(".watch-video").magnificPopup({ type: "iframe" }),
    t(".xs-image-popup").magnificPopup({
      type: "inline",
      closeOnContentClick: !1,
      midClick: !0,
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
      zoom: { enabled: !0, duration: 500 },
      mainClass: "mfp-fade",
    }),
    t(".search-icon").length > 0)
  ) {
    t(".search-icon").on("click", function (e) {
      e.preventDefault, t(".header-search-field").slideToggle("slow");
    }),
      t(document).on("mouseup", function (e) {
        var a = t(".search-item");
        a.is(e.target) ||
          0 !== a.has(e.target).length ||
          (t(".header-search-field").fadeOut("slow"), !0);
      });
  }
  e = !0;
  (t(".about-inner-content").appear(),
  t(".about-inner-content").on("appear", function () {
    e &&
      (t(".funfact-title").each(function () {
        var e = t(this);
        jQuery({ Counter: 0 }).animate(
          { Counter: e.attr("data-counter") },
          {
            duration: 8e3,
            easing: "swing",
            step: function () {
              var t = Math.ceil(this.Counter).toString();
              if (Number(t) > 99999)
                for (; /(\d+)(\d{3})/.test(t); )
                  t = t.replace(/(\d+)(\d{3})/, "");
              e.html(t + "+");
            },
          }
        );
      }),
      (e = !1));
  }),
  t(".single-timeline-item .history-of-timeline").length > 0 &&
    t(".single-timeline-item .history-of-timeline").on("click", function () {
      t(this).parents(".single-timeline-item").addClass("active");
      t(this).parents(".single-timeline-item").siblings().removeClass("active");
      return !1;
    }),
  t(".testmonial-widget").length > 0) &&
    t(".testmonial-widget").owlCarousel({
      items: 1,
      mouseDrag: !0,
      touchDrag: !0,
      dots: !0,
      autoplay: !0,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !0,
      smartSpeed: 800,
    });
  t("#testmonial-slide").length > 0 &&
    t("#testmonial-slide").owlCarousel({
      items: 1,
      mouseDrag: !0,
      touchDrag: !0,
      dots: !1,
      nav: !0,
      autoplay: !0,
      navText: [
        '<i class="icon icon-chevron-left"></i>',
        '<i class="icon icon-chevron-right"></i>',
      ],
      autoplayTimeout: 5e3,
      autoplayHoverPause: !0,
      smartSpeed: 800,
      responsive: {
        0: { nav: !1 },
        480: { nav: !1 },
        768: { nav: !0 },
        991: { nav: !0 },
      },
    });
  t("#testmonial-slider-v4").length > 0 &&
    t("#testmonial-slider-v4").owlCarousel({
      items: 3,
      mouseDrag: !0,
      margin: 30,
      touchDrag: !0,
      dots: !0,
      autoplay: !0,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !0,
      smartSpeed: 800,
      responsive: {
        0: { nav: !1, items: 1 },
        480: { nav: !1, items: 1 },
        768: { nav: !1, items: 2 },
        991: { nav: !1 },
      },
    });
  t(document).on("submit", "#xs-contact-form", function (e) {
    e.preventDefault();
    var a,
      i = t("#xs_contact_name"),
      o = t("#xs_contact_email"),
      n = t("#xs_contact_phone"),
      s = t("#xs_contact_subject"),
      l = t("#x_contact_massage"),
      r = t("#xs_contact_submit"),
      c = !1;
    return (
      t(".xpeedStudio_success_message").remove(),
      "" === i.val().trim()
        ? (i.addClass("invaild"), (c = !0), i.focus(), !1)
        : (i.removeClass("invaild"),
          "" === o.val().trim()
            ? (o.addClass("invaild"), (c = !0), o.focus(), !1)
            : ((a = o.val().toLowerCase()),
              /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
                a
              )
                ? (o.removeClass("invaild"),
                  "" === n.val().trim()
                    ? (n.addClass("invaild"), (c = !0), n.focus(), !1)
                    : (n.removeClass("invaild"),
                      "" === s.val().trim()
                        ? (s.addClass("invaild"), (c = !0), s.focus(), !1)
                        : (s.removeClass("invaild"),
                          "" === l.val().trim()
                            ? (l.addClass("invaild"), (c = !0), l.focus(), !1)
                            : (l.removeClass("invaild"),
                              void (
                                !1 === c &&
                                (r.before().hide().fadeIn(),
                                t.ajax({
                                  type: "POST",
                                  url: "assets/php/contact-form.php",
                                  data: {
                                    xs_contact_name: i.val(),
                                    xs_contact_email: o.val(),
                                    xs_contact_phone: n.val(),
                                    xs_contact_subject: s.val(),
                                    x_contact_massage: l.val(),
                                  },
                                  success: function (e) {
                                    r
                                      .after(
                                        '<p class="xpeedStudio_success_message">' +
                                          e +
                                          "</p>"
                                      )
                                      .hide()
                                      .fadeIn(),
                                      setTimeout(() => {
                                        t(
                                          ".xpeedStudio_success_message"
                                        ).fadeOut(1e3, function () {
                                          t(this).remove();
                                        });
                                      }, 5e3),
                                      t("#xs-contact-form")[0].reset();
                                  },
                                }))
                              )))))
                : (o.addClass("invaild"), (c = !0), o.focus(), !1)))
    );
  }),
    t(".comment-reply-link").length > 0 &&
      t(".comment-reply-link").on("click", function () {
        return (
          t("html, body").animate(
            { scrollTop: t(this.hash).offset().top - 100 },
            1e3
          ),
          !1
        );
      }),
    t(".input100").each(function () {
      t(this).on("blur", function () {
        "" != t(this).val().trim()
          ? t(this).addClass("has-val")
          : t(this).removeClass("has-val");
      });
    });
  var a = t(".validate-input .input100");
  function i(e) {
    if ("email" == t(e).attr("type") || "email" == t(e).attr("name")) {
      if (
        null ==
        t(e)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          )
      )
        return !1;
    } else if ("" == t(e).val().trim()) return !1;
  }
  function o(e) {
    var a = t(e).parent();
    t(a).addClass("alert-validate");
  }
  t(".validate-form").on("submit", function () {
    for (var t = !0, e = 0; e < a.length; e++)
      0 == i(a[e]) && (o(a[e]), (t = !1));
    return t;
  }),
    t(".validate-form .input100").each(function () {
      t(this).focus(function () {
        var e;
        (e = t(this).parent()), t(e).removeClass("alert-validate");
      });
    }),
    t(".contact100-btn-hide").on("click", function () {
      t(".wrap-contact100").fadeOut(400);
    }),
    t(".contact100-btn-show").on("click", function () {
      t(".wrap-contact100").fadeIn(400);
    });
})(jQuery);
