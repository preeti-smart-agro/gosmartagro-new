$(function() {

    var isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
    var redirect = true;
    try {
        var documentBody = document.getElementById('body')
        documentBody.setAttribute("oncontextmenu", "return false");
        documentBody.setAttribute("onselectstart", "return false");
        documentBody.setAttribute("ondragstart", "return false");
        documentBody.setAttribute("oncopy", "return false");
        documentBody.setAttribute("oncut", "return false");
        documentBody.setAttribute("onpaste", "return false");
    } catch (error) {}

    var scrollingIndex = 0;
    try {
        document.addEventListener("contextmenu", function(e) {
            e.preventDefault();
        }, false);
    } catch (err) {}

    try {
        window.onload = function() {
            var isDate = false;
            var storedDate = localStorage.getItem("storedDate");
            var currentDate = new Date();
            if (storedDate === null) {
                localStorage.setItem("storedDate", new Date().toLocaleDateString());
                showPopUp();
            } else {
                storedDate = new Date(storedDate).toLocaleDateString();
                currentDate = new Date(currentDate).toLocaleDateString();
                if (new Date(currentDate) > new Date(storedDate)) {
                    localStorage.setItem("storedDate", new Date().toLocaleDateString());
                    showPopUp();
                } else {
                    localStorage.setItem("storedDate", new Date().toLocaleDateString());
                    var popUpBlk = document.getElementById('pop-up-blk');
                    popUpBlk.classList.remove('in-visible');
                    var documentBody = document.getElementById('body')
                    documentBody.style.overflow = 'auto';
                }
            }

        }
    } catch (err) {}
    try {
        $(document).keydown(function(event) {
            if (event.keyCode == 123) {
                return false;
            } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
                return false;
            } else if (event.ctrlKey && event.keyCode == 86) {
                alert('Can not copy data from this site');
                return false;
            } else if (event.ctrlKey && event.keyCode == 67) {
                return false;
            } else if (event.keyCode == 27) {
                var domElement = document.getElementById('iframe-video');
                if (!domElement.classList.contains('iframe-in-visible')) {
                    domElement.classList.add('iframe-in-visible');
                    domElement.removeAttribute("src");
                    var documentBody = document.getElementById('body')
                    documentBody.style.overflow = 'auto';
                }
                return false;
            }
        });
    } catch (error) {}

    // try {
    //     $("#v-player").click(function (event) {
    //            var domElement = document.getElementById('v-player');
    //             if (!domElement.classList.contains('iframe-in-visible')) {
    //                 domElement.classList.add('iframe-in-visible')
    //             }
    //             domElement = document.getElementById('iframe-video');
    //             domElement.removeAttribute("src");
    //     });
    // } catch (error) { }

    try {
        Window.addEventListener("devtools-opened", function(e) {
            e.preventDefault();
            window.webContents.closeDevTools();
        }, false);

    } catch (error) {}

    if (isMobile[0] === 'Mobi') {
        try {
            document.getElementById('contact-numbers').classList.remove('align-to-right');
        } catch (error) {}

        try {
            $('.social-icon-li').toggleClass('mbl-social-icon-li');
        } catch (error) {

        }
        try {
            $('.social-icons').toggleClass('mbl-social-icons');
        } catch (error) {

        }
        try {
            $('#socialicons').addClass('mbl-horizontal');
        } catch (error) {

        }
        try {
            $('.phone').toggleClass('mbl-phone');
        } catch (error) {

        }
        try {
            $('.mobile').attr("href", "tel:+919606224400");
        } catch (error) {

        }
        try {
            $('#servicesmobile').attr("href", "tel:+9606224400");
        } catch (error) {}

    } else {
        try {
            document.getElementById('contact-numbers').classList.add('align-to-right');
        } catch (error) {}
        $('#socialicons').removeClass('mbl-horizontal');
    }

    $("#mobile").mouseleave(function() {
        if ($('.mobile').hasClass('deskmobile')) {
            $(this).focus();
            $(this).select();
            document.execCommand('copy');
            $('.visible').toggleClass('invisible');
            $('.mobile').toggleClass('deskmobile');
            document.getElementById('mobile').value = '';
            document.getElementById('mobile').innerHTML = '<i id="fa-square" class="fa fa-phone-square visible" aria-hidden="true"></i>';
        } else {

        }
    });
    $(".mobile").mouseleave(function() {
        if ($('.mobile').hasClass('deskmobile')) {
            $(this).focus();
            $(this).select();
            document.execCommand('copy');
            $('.visible').toggleClass('invisible');
            $('.mobile').toggleClass('deskmobile');
            document.getElementById('mobile').value = '';
            document.getElementById('mobile').innerHTML = '<i id="fa-square" class="fa fa-phone-square visible" aria-hidden="true"></i>';
        } else {

        }
    });
    $(".mobile").mouseenter(function() {
        var isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
        if (isMobile[0] !== 'Mobi') {
            // $('#mobile').attr("href", "contact-us.html");
            $('.visible').toggleClass('invisible');
            if (document.getElementById('mobile').value === undefined || document.getElementById('mobile').value === '') {
                document.getElementById('mobile').value = '9606224400';
                document.getElementById('mobile').innerHTML = '9606224400';

            } else {
                document.getElementById('mobile').value = '';
                document.getElementById('mobile').innerHTML = '<i id="fa-square" class="fa fa-phone-square visible" aria-hidden="true"></i>';
            }
            document.getElementById('_phone').style.width = '200px';
            $('.mobile').toggleClass('deskmobile');
        }
    });

    // Service Mobile 
    $("#servicesmobile").mouseleave(function() {
        if ($('.servicesmobile').hasClass('deskmobile')) {
            $(this).focus();
            $(this).select();
            document.execCommand('copy');
            $('.visible').toggleClass('invisible');
            $('.servicesmobile').toggleClass('deskmobile');
            document.getElementById('servicesmobile').value = '';
            document.getElementById('servicesmobile').innerHTML = '<i id="fa-square" class="fa fa-phone-square visible" aria-hidden="true"></i>';
        } else {

        }
    });

    $("#servicesmobile").mouseenter(function() {
        var isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
        // if (isMobile[0] !== 'Mobi') {
        // $('#mobile').attr("href", "contact-us.html");
        $('.visible').toggleClass('invisible');
        if (document.getElementById('servicesmobile').value === '' || document.getElementById('servicesmobile').value === undefined) {
            document.getElementById('servicesmobile').value = '9606224400';
            document.getElementById('servicesmobile').innerHTML = '9606224400';

        } else {
            document.getElementById('servicesmobile').value = '';
            document.getElementById('servicesmobile').innerHTML = '<i id="fa-square" class="fa fa-phone-square visible" aria-hidden="true"></i>';
        }
        document.getElementById('_phone').style.width = '200px';
        $('.servicesmobile').toggleClass('deskmobile');
        // }
    });

    var payload = {};
    $(".refer-a-friend").click(function() {
        redirect = true;
        postRequest('https://gosmartagro.com/v1/services/notification', "referform", "Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393", "RAF");
    });

    /***********project and service popup api starts here*********************/
    $(".pr-we-connect-submit").click(function() {
        redirect = false;
        postRequest('https://gosmartagro.com/v1/services/notification', "pr-contactForm", "Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393", "CU");
    });

    $(".sr-we-connect-submit").click(function() {
        redirect = false;
        postRequest('https://gosmartagro.com/v1/services/notification', "sr-contactForm", "Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9606224400", "CU");
    });

    /***********project and service popup api ends here*********************/
    $(".we-will-connect").click(function() {
        redirect = true;
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("lastname", "message-loaded");
        } else {}
        postRequest('https://gosmartagro.com/v1/services/notification', "cotactusForm", "Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393", "CU");
    });

    $(".drop-message").click(function() {
        redirect = true;
        postRequest('https://gosmartagro.com/v1/services/notification', "dropmessage", "Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393", "GETC");
    });

    $(".send-questions").click(function() {
        redirect = true;
        postRequest('https://gosmartagro.com/v1/services/notification', "sendquestions", "Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393", "FAQ");
    });

    $(".invester-form").click(function() {
        redirect = true;
        postRequest('https://gosmartagro.com/v1/services/notification', "investerform", "Thank you for showing interest on Investing SmartAgro project, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393", "IN");
    });

    $(".close-btn").click(function() {
        document.getElementById('init-pop-up').classList.add('in-visible');
        document.getElementById('pop-up-blk').classList.remove('in-visible');
    });

    // https://gosmartagro.com/gosmartagro/investor/email
    $(".contact100-form-btn").click(function() {
        redirect = true;
        if (document.getElementById('enq-moblnumber').value.length === 10) {
            var val = document.getElementById('professionalservices').value;
            if (val === 'I have my own agricultural land / I own farmland') {
                postRequest('https://gosmartagro.com/v1/services/notification/services', "enquiryform", "Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393", "GETC");

            } else if (val === 'I want to buy agricultural land / I want to invest') {
                if (document.getElementById('readytoinvest').value !== '---Select---') {
                    if (document.getElementById('freesitevisit').value !== '---Select---') {
                        postRequest('https://gosmartagro.com/v1/services/notification/services', "enquiryform", "Thank you for contacting us, Our team will get back to you within 24 Hours! Our friendly support team is available to help you, call on 9110223393", "GETC");
                    } else {
                        alert('Please Select When do you want to visit the site?');
                    }
                } else {
                    alert('Please Select How much are you looking to invest?');
                }
            } else {
                alert('Please Select Professional Service');
            }

        } else {
            alert('Mobile Number Should Be 10 digit');
        }

    });

    function showPopUp() {
        var domElement = document.getElementById('init-pop-up');
        var popContent = document.getElementById('pop-content');
        popContent.classList.add('popup-animate');
        domElement.classList.remove('in-visible');
        if (isMobile[0] === 'Mobi') {
            document.getElementById('smartagro_logo').classList.remove('in-visible');
            document.getElementById('list-desk').classList.add('in-visible');
            document.getElementById('list-mbl').classList.remove('in-visible');

        } else {
            document.getElementById('list-desk').classList.remove('in-visible');
            document.getElementById('list-mbl').classList.add('in-visible');
            /**if (!document.getElementById('smartagro_logo').classList.contains('in-visible')) {
                document.getElementById('smartagro_logo').classList.add('in-visible');
            }**/
        }
        var documentBody = document.getElementById('body')
        documentBody.style.overflow = 'hidden';
    }

    function postRequest(url, formid, _message, code) {
        var message = _message;
        var timeout1 = 4000;
        var timeout2 = 3500;
        $('#preloader').removeClass('loaded');
        $('#preloader').removeClass('loader-hidden');
        if (formid === "enquiryform") {
            timeout1 = 1000;
            timeout2 = 1000;
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                var json = JSON.parse(xhr.responseText);
                if (json.status === 0) {
                    setTimeout(function() {
                        $('#preloader').addClass('loaded');
                        $('#preloader').addClass('loader-hidden');
                        var oldUrl = window.location.href;
                        var n = oldUrl.lastIndexOf("/");
                        oldUrl = oldUrl.substring(n, oldUrl.length);
                        localStorage.setItem("oldUrl", oldUrl);
                        if (redirect) {
                            window.location.href = './thank-you.html';
                            setTimeout(function() {
                                window.location.href = '.' + oldUrl;
                            }, timeout1);
                        } else {
                            try {
                                document.getElementById('cust-info-section').classList.add('in-visible');
                            } catch (error) {}
                        }
                    }, timeout2);
                } else {
                    setTimeout(function() {
                        $('#preloader').addClass('loaded');
                        $('#preloader').addClass('loader-hidden');
                        var oldUrl = window.location.href;
                        var n = oldUrl.lastIndexOf("/");
                        oldUrl = oldUrl.substring(n, oldUrl.length);
                        localStorage.setItem("oldUrl", oldUrl);
                        try {
                            document.querySelectorAll('.successfull')[0].scrollIntoView({ behavior: 'smooth' });
                        } catch (err) {};
                        if (redirect) {
                            window.location.href = './thank-you.html';
                            setTimeout(function() {
                                window.location.href = '.' + oldUrl;
                            }, 2000);
                        }
                        try {
                            document.getElementById('cust-info-section').classList.add('in-visible');
                        } catch (error) {}

                    }, 2000);
                }

            } else {
                try {
                    document.getElementById('cust-info-section').classList.add('in-visible');
                } catch (error) {}
                setTimeout(function() {
                    $('#preloader').addClass('loaded');
                    var oldUrl = window.location.href;
                    var n = oldUrl.lastIndexOf("/");
                    oldUrl = oldUrl.substring(n, oldUrl.length);
                    localStorage.setItem("oldUrl", oldUrl);
                    if (redirect) {
                        window.location.href = './thank-you.html';
                        setTimeout(function() {
                            window.location.href = '.' + oldUrl;
                        }, 1000);
                    }

                }, 1000);
            }
        }
        try {
            var payload = getFormObj(formid, code, message);
            requestpayload = JSON.stringify(payload);
            xhr.send(requestpayload);
        } catch (err) {
            console.log('err', this.status);
            $('#preloader').addClass('loaded');
            $('#preloader').addClass('loader-hidden');
        }
    }

    function getFormObj(formId, code, message) {
        var formObj = {
            name: '',
            mobile: '',
            email: '',
            message: '',
            emailFor: '',
            landlocation: '',
            numberOfAcres: ''
        };
        var inputs = $('#' + formId);
        $.each(inputs[0].elements, function(i, input) {
            if ($(input).is('[required]')) {
                if (typeof input.value === 'undefined' || input.value === null || input.value === "") {
                    alert(input.title);
                    $(input).focus();
                    throw new Error(input.title);
                }
                if (input.type === 'email') {
                    var emailVal = input.value;
                    if (!emailVal.includes('.') || !emailVal.includes('@') || emailVal.endsWith('.')) {
                        alert('Enter Valid Email Id');
                        $(input).focus();
                        throw new Error(input.title);
                    }
                }
                formObj[input.name] = input.value;
            } else {
                formObj[input.name] = input.value;
            }
        });
        formObj['emailFor'] = code;
        if (formId === "enquiryform") {
            try {
                formObj['readytoinvest'] = document.getElementById('readytoinvest').value;
                formObj['freesitevisit'] = document.getElementById('freesitevisit').value;
            } catch (error) {

            }
            try {
                var val = document.getElementById('professionalservices').value;
                var objValue = "";
                if (val === 'I have my own agricultural land / I own farmland') {
                    objValue = 'Services';
                } else if (val === 'I want to buy agricultural land / I want to invest') {
                    objValue = 'Product';
                }
            } catch (error) {}
            formObj['professionalservices'] = objValue;
        }
        if (formId === "pr-contactForm") {
            var readytoinvest, freesitevisit = undefined;
            try {
                readytoinvest = document.getElementById('readytoinvest');
            } catch (error) {}
            try {
                freesitevisit = document.getElementById('freesitevisit');
            } catch (error) {}

            if (readytoinvest.value !== undefined && !readytoinvest.value.includes('Select')) {
                formObj['readytoinvest'] = readytoinvest.value;
            } else {
                readytoinvest.focus();
                alert(readytoinvest.title);
                throw new Error(readytoinvest.title);
            }
            if (freesitevisit.value !== undefined && !freesitevisit.value.includes('Select')) {
                formObj['freesitevisit'] = freesitevisit.value;
            } else {
                freesitevisit.focus();
                alert(freesitevisit.title);
                throw new Error(freesitevisit.title);
            }
        }
        try {
            formObj.splice(1, 1);
        } catch (error) {

        }
        return formObj;
    }

    setTimeout(function() {
        var currentUrl = window.location.href;
        var n = currentUrl.lastIndexOf("/");
        currentUrl = currentUrl.substring(n, currenturl.length);
        if (currenturl.indexOf('thank-you') != -1) {
            var oldUrl = localStorage.getItem('oldUrl');
            window.location.href = '.' + oldUrl;
        }
    }, 6000);
});