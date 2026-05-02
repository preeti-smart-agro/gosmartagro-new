
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

function openPopUp() {
    var domElement = document.getElementById('init-pop-up');
    var popContent = document.getElementById('pop-content');
    popContent.classList.add('popup-animate');
    domElement.classList.remove('in-visible');
    document.getElementById('pop-up-blk').classList.add('in-visible');
    document.getElementById('btn-close').classList.remove('in-visibile');
}

function closePopUp(elementId) {
 localStorage.setItem("storedDate", new Date().toLocaleDateString());
 sessionStorage.setItem("storedDate", new Date().toLocaleDateString());
 localStorage.setItem("captureCustomerInfo", false);
 sessionStorage.setItem("captureCustomerInfo", false);
 var domElement = document.getElementById('init-pop-up');
 var popContent = document.getElementById('pop-content');
 popContent.classList.remove('popup-animate');
 domElement.classList.add('in-visible');
 document.getElementById('pop-up-blk').classList.remove('in-visible');
 document.getElementById('btn-close').classList.add('in-visibile');
}