var scrollingIndex = 0;

// d3.json("assets/json/faq.json", function(error, faq) {
//     if (error)
//     throw error;
//     faqData=faq;

//     // console.log(faq);
// });
// console.log(faqData);
setTimeout(() => {
    var faqAboutCompany = [
      {
        "html": "about-company.html",
        "name": "How old is your company, i.e., M/s Eterno Housing Private Limited?",
        "description": "We are an agro-realty start-up headquartered in Bangalore. We initiated our journey after our management team gained a combined experience of 30+ years in agriculture, horticulture, and agro-production sector.<br> The expert team backing M/s Eterno Housing Private Limited decided to bring about revolutionary changes in agro-realty sector, which is why they came together and brought in their combined expertise to help investors like you."
      },
      {
        "html": "about-company.html",
        "name": "Is Smart Agro under partnership?",
        "description": "Yes, we are a Private Limited Company and we have 2 directors on board. Our CIN Number is U74999KA2018PTC109164  and our Company Registration Number is 109164."
      },
      {
        "html": "about-company.html",
        "name": "What happens in the event of death of a SmartAgro director? ",
        "description": "Since it is a Private Limited Company even if one director dies the others will continue operating. will not be affected and your land and your investment is 100% safe even if a director is no more."
      },
      {
        "html": "about-company.html",
        "name": "When did your company purchase land?",
        "description": "The land at Hindupur was purchased in the year 2018."
      },
      {
        "html": "about-company.html",
        "name": "Is this the first project of your company?",
        "description": "Smart Agro has been exposed to agriculture and real estate from a long time. If large scale project is taken into consideration then the project at Hindupur is our first. But over the years we have been involved in various projects of varying scale and this has equipped us with required knowledge to implement projects of this scale."
      },
      {
        "html": "about-company.html",
        "name": "How can I trust your company? How should I believe that it will provide me returns over a period of 10 years?",
        "description": "We started with the ambition to benefit our investors and our planet Earth. Our honesty,  transparency, and our experience spanning over 30+ years is the reason you should trust us. We are here for your growth and we are confident of delivering the same. Our understanding of the agro-realty industry is unparalleled, we know how to choose the right area, the perfect land that’s easily accessible, we make the land suitable for cultivation, our in-house agricultural experts choose the right crop and we be with you from the time of sowing to the time of reaping. We take care of all operational hassles so that you can reap benefits on your investment over a period of 10 years and beyond."
      },
      {
        "html": "about-company.html",
        "name": "Can we talk with your MD directly regarding the project?",
        "description": "Yes, our MD Mr. Kiran who is also Founder of Smart Agro will be delighted to meet you in person at his office. Additionally, you can also mail him directly at kiran@gosmartagro.com"
      }
    ]
    var selectedItem = localStorage.getItem("selectedItem");
    // console.log("faqAboutcompany >> ", faqAboutCompany)
    for (let index = 0; index < faqAboutCompany.length; index++) {
        var element = faqAboutCompany[index];
        // alert(element.name);
        var show = "";
        var color = "button-blink-default";
        var ariaExpanded = false;
        var collapsed = "collapsed";
        // alert(element + ' name ' +  element.name );
        try {
            if (selectedItem !== null && element.name.toLowerCase().includes(selectedItem.toLowerCase())) {
                show = "show";
                collapsed = "";
                ariaExpanded = true;
                scrollingIndex = index;
                color = "button-blink";
            }
        } catch (err) { }
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
                '<button class="btn btn-link ' + collapsed + '" data-toggle="collapse" data-target="#collapse' + index + '" aria-expanded="' + ariaExpanded + '" aria-controls="collapse' + index + '"> <span class="icon icon-question-circle"></span><span class="btn-blink-span ' + color + '">' + element.name + '</span></button>' +
                '</h4> <div id="collapse' + index + '" class="collapse ' + show + '" aria-labelledby="heading' + index + '" data-parent="#accordion">' +
                '<div class="card-body ' + cardbodycustom + '"> <p class="accordian-conntent passmark">' + element.description + '</p> </div> </div>';
        } else {
            faqsingleitem.innerHTML = '<h4 id="heading' + index + '" class="' + h4Class + '">' +
                '<button class="btn btn-link ' + collapsed + '" data-toggle="collapse" data-target="#collapse' + index + '" aria-expanded="' + ariaExpanded + '" aria-controls="collapse' + index + '"> <span class="icon icon-question-circle"></span><span class="btn-blink-span ' + color + '">' + element.name + '</span></button>' +
                '</h4> <div id="collapse' + index + '" class="collapse ' + show + '" aria-labelledby="heading' + index + '" data-parent="#accordion">' +
                '<div class="card-body ' + cardbodycustom + '"> <p class="accordian-conntent">' + element.description + '</p> </div> </div>';
        }

        // console.log(faqsingleitem.innerHTML);
        parentElement.appendChild(faqsingleitem);
    }
    var elmnt = document.getElementById("item" + scrollingIndex);
    elmnt.classList.add('show-item');
    // console.log(elmnt.getBoundingClientRect());
    elmnt.scrollIntoView();
    elmnt.click();
}, 100)
