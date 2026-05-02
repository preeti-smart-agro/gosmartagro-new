try{window.scrollTo(0,0);}catch(err){}
try{var owl=$('.owl-carousel');owl.owlCarousel();owl.trigger('stop.owl.autoplay');}catch(err){}
function playVideo(_rul){var domElement=document.getElementById('v-player');if(domElement.classList.contains('iframe-in-visible')){domElement.classList.remove('iframe-in-visible')}
domElement=document.getElementById('iframe-video');domElement.setAttribute("src",_rul);var documentBody=document.getElementById('body')
documentBody.style.overflow='hidden';}
document.getElementById("v-player").addEventListener("click",function(){var domElement=document.getElementById('v-player');if(!domElement.classList.contains('iframe-in-visible')){domElement.classList.add('iframe-in-visible')}
domElement=document.getElementById('iframe-video');domElement.removeAttribute("src");var documentBody=document.getElementById('body')
documentBody.style.overflow='auto';});function closeVideo(){}