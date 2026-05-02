
var scrollingIndex = 0;




// d3.json("assets/json/faq.json", function(error, faq) {
//     if (error)
//     throw error;
//     faqData=faq;

//     // console.log(faq);
// });
// console.log(faqData);
setTimeout(() => {
    var faqAboutpayments = [
        {
          "html": "about-payments.html",
          "name": "Since it is an agricultural land, how can I avail exemptions while filing Income Tax returns?",
          "description": "Income Tax exemptions at this point of time cannot be availed when a purchase of agricultural land is involved."
        },
        {
          "html": "about-payments.html",
          "name": "What facilities will be provided for land purchase?",
          "description": "<p>We will be providing the following facilities:</p><ul><li><a>Land Levelling</a></li><li><a>Land Fencing</a></li><li><a>Gate Installation for your property</a></li><li><a>1 Borewell for every 5 acres of land</a></li><li><a>Water storage facility</a></li><li><a>Planting of Melia Dubia seeds and cash crops</a></li><li><a>Well-trained staff with experience in agriculture sector will look after your piece of land</a></li><li><a>Building of common area infrastructure, e.g., internal roads, generator room, guest rooms, etc.</a></li></ul>"
        },
        {
          "html": "about-payments.html",
          "name": "Since Andhra Pradesh Government provides subsidy, so will the benefits of subsidy be passed to us or will Smart Agro keep the benefits to themselves?",
          "description": "The Andhra Pradesh Government will provide subsidy to every landowner account. That subsidy amount must be transferred to lease holder account i.e., Smart Agro account and at the time of paying Yearly Profits from cash crops, the subsidy money would be added and deposited into your bank account."
        },
        {
          "html": "about-payments.html",
          "name": "Do I need to pay anything extra during the 10 years timeframe which is our lease duration?",
          "description": "No, you need not pay anything extra except the registration charges."
        },
        {
          "html": "about-payments.html",
          "name": "Can expenses incurred on cash crop cultivation be claimed by land owners?",
          "description": "No, land owners cannot claim expenses incurred on cultivation of cash crops as it will be claimed by lease holder only. Once the expenses are claimed by lease holder, the profits will be shared with the land holders and this will be a Non-Taxable income."
        },
        {
          "html": "about-payments.html",
          "name": "Can we get complete expense receipt from you for cash crops as well?",
          "description": "Yes, all Landowners will be provided with Reports of Expense, Payment Expense, and receipts of the same will be shared with you from our company."
        },
        {
          "html": "about-payments.html",
          "name": "When can I expect returns from cash crops? Will any date for the same be mentioned on Lease Agreement?",
          "description": "On entire 52 acres of land cash crops will be planted at once. So, once we have planted them, we will inform you about the same and let you know an expected month and year by when you can expect returns from cash crops."
        },
        {
          "html": "about-payments.html",
          "name": "What is the Cost for Registrations ?",
          "description": "Stamp Duty charges for Registration is 6.5% . "
        },
        {
          "html": "about-payments.html",
          "name": "How much land area will be considered by banks for sanctioning loan?",
          "description": "Banks will support till the amount of loan applied for is up to INR 8 lakhs. Banks will also verify customer profile to ascertain if the individual can be given a loan or not."
        },
        {
          "html": "about-payments.html",
          "name": "How can I get a loan from bank and what is the procedure for availing the same? Also, which banks provide loans and at what are the interest rate?",
          "description": "In order to avail bank loan facility, you must convert 10 Cents of Land into a non-agriculture zone. Once this is done, you can avail loan from any nationalized or private banks. Usually the rate of interest would be around 9.25% per annum."
        },
        {
          "html": "about-payments.html",
          "name": "When can I register the farm land in case if I avail the EMI Scheme?",
          "description": "EMI scheme will be for a period of 2 years. Once this duration is completed and EMI is paid then the Landowner will be able to take the possession of property."
        },
        {
          "html": "about-payments.html",
          "name": "Can we get a written confirmation from your company stating that you will be giving the client / investors / land purchasers a profit of INR 30 lakhs  through Timber Plantation? Also, can give you give a written confirmation about the INR 40 thousand or INR 50 thousands  of yearly profit as mentioned by you?",
          "description": "Although we are confident of generating profits for our client but it would not be possible to give any written assurance"
        }
      ]
    var selectedItem = localStorage.getItem("selectedItem");
    // console.log("faqAboutpayments >> ", faqAboutpayments)
    for (let index = 0; index < faqAboutpayments.length; index++) {
        var element = faqAboutpayments[index];
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
