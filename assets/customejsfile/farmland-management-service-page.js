
function openCustomerInfo() {
    var elementId = document.getElementById("customer-info");
    elementId.classList.remove("in-visible");
}

function closecustomerinfo() {
    var elementId = document.getElementById('customer-info')
    elementId.classList.add('in-visible');
    //document.getElementById('pop-up-blk').classList.remove('in-visible');
}

function showIcons() {
    var domElement = document.getElementById('social-icons');
    domElement.classList.remove('active');
    var domElement1 = document.getElementById('social-icons-1');
    domElement1.classList.add('active');
    var domElement2 = document.getElementById('social-icons-2');
    domElement2.classList.add('active');
}

function closeIcons() {
    var domElement = document.getElementById('social-icons');
    domElement.classList.add('active');
    var domElement1 = document.getElementById('social-icons-1');
    domElement1.classList.remove('active');
    var domElement2 = document.getElementById('social-icons-2');
    domElement2.classList.remove('active');
}

function showNumber() {
    var domNumber = document.getElementById('mobile-no');
    domNumber.classList.remove('invisible')
    document.getElementById('caller-icon').click();
    // domNumber.classList.add('visible')

}

function closeNumber() {
    var domNumber = document.getElementById('mobile-no');
    domNumber.classList.add('invisible')
}

var scrollingIndex = 0;
try {
    document.getElementById('p-content').style.width = '825px !important';
} catch (err) { }
try {
    document.getElementById('p-call-back-content').style.width = '825px !important';
} catch (err) { }
window.onload = function (e) {

    var faqData = JSON.parse(
        '{"data":{"service":[{"html":"farmland-management-service.html","name":"Does engaging in the farm management service affect my ownership or title in any way?","description":"No! SmartAgro is merely a service provider that acts as your agent and conducts end-to-end farming services on your land. You can be rest assured that your title will remain as it is."},{"html":"farmland-management-service.html","name":"How will I be charged for the services provided?","description":"The activities and their expenses carried out on your farm will be pre-approved by you. Over and above this, SmartAgro will charge you a reasonable management fee for the services provided. The pricing structure varies from project to project and we believe in customising it as per the customer and his requirements. "},{"html":"farmland-management-service.html","name":"Why just organic and why not a traditional farming method? I’ve heard organic farming does not provide a good yield.","description":"<p >Contrary to popular belief, organic farming if done scientifically, can substantially increase the yield of the land.</p><p>SmartAgro’s expert team ensures that we get the best of both worlds - chemical-free crops and a financially profitable yield. </p>"}]}}'
    );


    // d3.json("assets/json/faq.json", function(error, faq) {
    //     if (error)
    //     throw error;
    //     faqData=faq;

    //     // console.log(faq);
    // });
    // console.log(faqData);
    var faqservice = faqData.data.service;
    var selectedItem = localStorage.getItem("selectedItem");
    // console.log("faqservice >> ", faqservice)
    for (let index = 0; index < faqservice.length; index++) {
        var element = faqservice[index];
        // alert(element.name);
        var show = "";
        var color = "button-blink-default";
        var ariaExpanded = false;
        var collapsed = "collapsed";
        // alert(element + ' name ' +  element.name );
        if (selectedItem != null && element.name.toLowerCase().includes(selectedItem.toLowerCase())) {
            show = "show";
            collapsed = "";
            ariaExpanded = true;
            scrollingIndex = index;
            color = "button-blink";
        }
        var parentElement = document.getElementById('accordion');
        var faqsingleitem = document.createElement('div');
        faqsingleitem.className = 'faq-single-item';
        faqsingleitem.id = 'item' + index;

        var cardbodycustom = "";
        var h4Class = "faq-question-h4-default";
        if (element.name.length >= 145) {
            h4Class = "faq-question-h4";
            cardbodycustom = 'card-body-custom';
        }
        if (element.name.length >= 220) {
            h4Class = "faq-question-h4-large";
            cardbodycustom = 'card-body-custom';
        }
        if (element.description.includes("<ul>")) {
            faqsingleitem.innerHTML = '<h4 id="heading' + index + '" class="' + h4Class + '">' +
                '<button class="btn btn-link ' + collapsed + '" data-toggle="collapse" data-target="#collapse' + index + '" aria-expanded="' + ariaExpanded +
                '" aria-controls="collapse' + index + '"> <span class="icon icon-question-circle"></span><span class="btn-blink-span ' + color + '">' + element.name +
                '</span></button>' +
                '</h4> <div id="collapse' + index + '" class="collapse ' + show + '" aria-labelledby="heading' + index + '" data-parent="#accordion">' +
                '<div class="card-body ' + cardbodycustom + '"> <p class="accordian-conntent passmark">' + element.description + '</p> </div> </div>';
        } else {
            faqsingleitem.innerHTML = '<h4 id="heading' + index + '" class="' + h4Class + '">' +
                '<button class="btn btn-link ' + collapsed + '" data-toggle="collapse" data-target="#collapse' + index + '" aria-expanded="' + ariaExpanded +
                '" aria-controls="collapse' + index + '"> <span class="icon icon-question-circle"></span><span class="btn-blink-span ' + color + '">' + element.name +
                '</span></button>' +
                '</h4> <div id="collapse' + index + '" class="collapse ' + show + '" aria-labelledby="heading' + index + '" data-parent="#accordion">' +
                '<div class="card-body ' + cardbodycustom + '"> <p class="accordian-conntent">' + element.description + '</p> </div> </div>';
        }

        // console.log(faqsingleitem.innerHTML);
        parentElement.appendChild(faqsingleitem);
    }
    // try {
    //     var elmnt = document.getElementById("item" + scrollingIndex);
    //     elmnt.classList.add('show-item');
    //     // console.log(elmnt.getBoundingClientRect());
    //     elmnt.scrollIntoView();
    //     elmnt.click();
    // } catch (error) {

    // }
}

function collapseAll(event, btnid, collapseId) {
    var elementid = '';
    for (let index = 0; index < 5; index++) {
        if (event.target.id === (btnid + index)) {
            elementid = collapseId + index;
        } else {
            var domElement = document.getElementById(btnid + index);
            if (!domElement.classList.contains('collapsed')) {
                domElement.classList.add('collapsed');
            }
            var val = domElement.getAttribute('aria-expanded');
            if (val === 'true' || val === true) {
                domElement.setAttribute('aria-expanded', false);
            }

            domElement = document.getElementById(collapseId + index);
            if (domElement.classList.contains('show')) {
                domElement.classList.remove('show');
            }
        }
    }
}


var textData = ['We Leverage Your Agricultural Land, for You.', 'A-Z Farm Management That’s Scientific Organic & Profitable',
    'Leverage the Power of Your Agricultural Land.', 'Professional Farm Management That’s Organic & Profitable',
    'A-Z Farm Management That Delivers Profit', 'Transform your land into a prosperous organic farm'
];

var indx = 0;
var isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
if (isMobile[0] === 'Mobi') {

    try {
        document.getElementById('banner-title-1').remove();
        document.getElementById('banner-title-2').remove();
        document.getElementById('banner-title-3').remove();
        document.getElementById('banner-title-4').remove();
        document.getElementById('banner-title-5').remove();
        document.getElementById('banner-title-6').remove();

    } catch (error) { }


    textAnimation(indx);
    indx = 1;
    setInterval(function () {

        indx = indx + 1;
        if (indx > textData.length) {
            indx = 0;
        } else {
            for (let inx = 1; inx <= 6; inx++) {
                try {
                    document.getElementById('banner-inner-content-title' + inx).remove();
                } catch (error) { }
            }
            textAnimation(indx);
        }
    }, 2000);
} else if (isMobile[0] !== 'Mobi') {
    var idbannerinnercontent = document.getElementById('banner-inner-content');
    idbannerinnercontent.innerHTML = "";

    var el2 = '<div id="banner-inner-content-text-1" class="banner-inner-content-text item-1">' +
        '<p id="banner-title-1" class="banner-inner-content-title" style="margin-top: 6px;font-size: 45px;color: #ffffff !important;margin-bottom: 13px;font-weight: 600;">We Leverage Your Agricultural Land, for You.</p>' +
        '<p id="banner-title-2" class="banner-inner-content-title" style="padding-top: 20px;padding-bottom: 4px;font-size: 20px;color: greenyellow !important;">A-Z Farm Management That’s Scientific Organic & Profitable</p>' +
        '</div>' +
        '<div id="banner-inner-content-text-2" class="banner-inner-content-text item-2">' +
        '<p id="banner-title-3" class="banner-inner-content-title" style="margin-top: 6px;font-size: 45px;color: #ffffff !important;margin-bottom: 13px;font-weight: 600;">Leverage the Power of Your Agricultural Land.</p>' +
        '<p id="banner-title-4" class="banner-inner-content-title" style="padding-top: 20px;padding-bottom: 4px;font-size: 20px;color: greenyellow !important;">Professional Farm Management That’s Organic & Profitable</p>' +
        '</div>' +
        '<div id="banner-inner-content-text-3" class="banner-inner-content-text item-3">' +
        '<p id="banner-title-5" class="banner-inner-content-title" style="margin-top: 6px;font-size: 45px;color: #ffffff !important;margin-bottom: 13px;font-weight: 600;">A-Z Farm Management That Delivers Profit</p>' +
        '<p id="banner-title-6" class="banner-inner-content-title" style="padding-top: 20px;padding-bottom: 4px;font-size: 20px;color: greenyellow !important;">Transform your land into a prosperous organic farm</p>' +
        '</div>';
    idbannerinnercontent.innerHTML = el2;
}

function textAnimation(ind) {
    var bannerInnerContentElement = document.getElementById('banner-inner-content-text-1');
    try {
        bannerInnerContentElement.classList.remove('item-1');
    } catch (error) { }
    bannerInnerContentElement.classList.add('w3-animate-left');
    try {
        var ls = document.getElementsByClassName('banner-inner-content-title');
        for (let index = 0; index < ls.length; index++) {
            const lselement = ls[index];
            lselement.remove();
        }
    } catch (error) { }
    if (ind < textData.length) {
        var elementOne = textData[ind - 1];
        var elementTwo = textData[ind];
        if (ind === 0) {
            elementOne = textData[ind];
            elementTwo = textData[ind + 1];
        }


        console.log(elementOne);
        console.log(elementTwo);
        // try {
        //     document.getElementById('banner-title-1').innerText = elementOne;
        //     document.getElementById('banner-title-2').innerText = elementTwo;
        // } catch (error) {
        //     indx = 1;
        // }
        var bannerinnercontenttitle = document.createElement('p');
        // if (index === 1) {
        bannerinnercontenttitle.classList.add('banner-inner-content-title');
        bannerinnercontenttitle.setAttribute('id', 'banner-inner-content-title' + 1);
        bannerinnercontenttitle.setAttribute('style', 'margin-top: 6px;font-size: 45px ;color: #ffffff !important;margin-bottom: 13px;font-weight: 600;');
        bannerinnercontenttitle.innerHTML = elementOne;
        bannerInnerContentElement.appendChild(bannerinnercontenttitle);

        // } else {
        var el1 = document.getElementById('banner-inner-content-title' + 0);
        if (el1 === null) {
            bannerinnercontenttitle = document.createElement('p');
            bannerinnercontenttitle.classList.add('banner-inner-content-title');
            bannerinnercontenttitle.setAttribute('id', 'banner-inner-content-title' + 0);
            bannerinnercontenttitle.setAttribute('style', 'padding-top: 20px;padding-bottom: 4px;font-size: 20px;color: greenyellow !important;');
            bannerinnercontenttitle.innerHTML = elementTwo;
            bannerInnerContentElement.appendChild(bannerinnercontenttitle);
        }

        // }
    } else {
        indx = 0;
    }
}

function captureCustomerInfo() {
    var isCustomerInfoCapture = localStorage.getItem("captureCustomerInfo");
    if (isCustomerInfoCapture === null) {
        isCustomerInfoCapture = sessionStorage.getItem("captureCustomerInfo");
    }

    if (isCustomerInfoCapture !== null) {
        if (isCustomerInfoCapture === "false") {
            document.getElementById('pop-up-blk').classList.add('in-visible');
            document.getElementById('id-customer-info').classList.remove('in-visible');
            try {
                document.getElementById('cust-info-section').classList.remove('in-visible');
            } catch (err) { }
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            window.open("./assets/brochure/Investor_Brochure.pdf");
            localStorage.setItem("captureCustomerInfo", true);
            sessionStorage.setItem("captureCustomerInfo", true);
        }
    }
}

function closecustinfo() {
    document.getElementById('cust-info-section').classList.add('in-visible');
    document.getElementById('pop-up-blk').classList.remove('in-visible');
}

function closePopUp(elementId) {
    document.getElementById(elementId).classList.add('in-visible');
}
setTimeout(function () {
    try {
        document.getElementById('pop-up-blk').classList.add('in-visible');
    } catch (err) { }
}, 100)

function playVideo(_rul) {
    var domElement = document.getElementById('v-player');
    if (domElement.classList.contains('iframe-in-visible')) {
        domElement.classList.remove('iframe-in-visible')
    }
    domElement = document.getElementById('iframe-video');
    domElement.setAttribute("src", _rul);
    var documentBody = document.getElementById('body')
    documentBody.style.overflow = 'hidden';
}

document.getElementById("v-player").addEventListener("click", function () {
    var domElement = document.getElementById('v-player');
    if (!domElement.classList.contains('iframe-in-visible')) {
        domElement.classList.add('iframe-in-visible')
    }
    domElement = document.getElementById('iframe-video');
    domElement.removeAttribute("src");
    var documentBody = document.getElementById('body')
    documentBody.style.overflow = 'auto';
});

function openPopUp() {
    var domElement = document.getElementById('init-pop-up');
    var popContent = document.getElementById('pop-content');
    popContent.classList.add('popup-animate');
    domElement.classList.remove('in-visible');
    document.getElementById('pop-up-blk').classList.add('in-visible');
    document.getElementById('btn-close').classList.remove('in-visibile');
}

function closePopUp(elementId) {
    var domElement = document.getElementById('init-pop-up');
    var popContent = document.getElementById('pop-content');
    popContent.classList.remove('popup-animate');
    domElement.classList.add('in-visible');
    document.getElementById('pop-up-blk').classList.remove('in-visible');
    document.getElementById('btn-close').classList.add('in-visibile');
}

function closeVideo() {

}


